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
import { ThemeProvider } from '../context/themeContext';
import { LocaleProvider } from '../context/localeContext';

export default function NotesApp() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

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

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  if (initializing) return null;

  if (authedUser === null) {
    return (
      <ThemeProvider value={{ theme, toggleTheme }}>
        <LocaleProvider value={{locale, setLocale}}>        
        <Header isAuthed={false} />
        <Routes>
          <Route path="/" element={<Login loginSuccess={onLoginSuccess} />} />
          <Route path="/register" element={<Registration />} />
          <Route path="*" element={<Login loginSuccess={onLoginSuccess} />} />
        </Routes>
        </LocaleProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <LocaleProvider value={{locale, setLocale}}>
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
      </LocaleProvider>
    </ThemeProvider>
  );
}
