import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header.jsx';
import ActiveNotes from './ActiveNotes.jsx';
import ArchivedNotes from './ArchivedNotes.jsx';
import AddNotes from './AddNotes.jsx';
import DetailNote from'./DetailNote.jsx';
import NotFound from '../pages/404.jsx';

export default function NotesApp() {
  return (
    <>
      <Header />
      <main>
        <Routes>
            <Route path='/' element={<ActiveNotes />}/>
            <Route path='/archived' element={<ArchivedNotes />}/>
            <Route path='/new-notes' element={<AddNotes />}/>
            <Route path='/detail/:id' element={<DetailNote />}/>
            <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
