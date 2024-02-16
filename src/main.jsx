import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import NotesApp from './components/NotesApp.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NotesApp />
  </BrowserRouter>,
);
