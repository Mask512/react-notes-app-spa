import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import ActiveNotes from './ActiveNotes';
import ArchivedNotes from './ArchivedNotes';
import AddNotes from './AddNotes';
import DetailNote from './DetailNote';
import NotFound from '../pages/404';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import { getUserLogged, putAccessToken } from '../data/network-data';

export default function NotesApp() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
    setInitializing(false);
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    };
    fetchData();
  }, []);

  if (initializing) return null;

  if (authedUser === null) {
    return (
      <>
        <Header isAuthed={false} />
        <Routes>
          <Route path="/" element={<Login loginSuccess={onLoginSuccess} />} />
          <Route path="/register" element={<Registration />} />
          <Route path="*" element={<Login loginSuccess={onLoginSuccess} />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <Header isAuthed={true} logout={onLogout} />
      <main>
        <Routes>
          <Route path="/" element={<ActiveNotes />} />
          <Route path="/archived" element={<ArchivedNotes />} />
          <Route path="/new-notes" element={<AddNotes />} />
          <Route path="/detail/:id" element={<DetailNote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
