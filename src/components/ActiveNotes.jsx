import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import NotesList from './NotesList.jsx';
import SearchBar from './SearchBar.jsx';
import { getActiveNotes, deleteNote, archiveNote } from '../data/data.js';

export default function ActiveNotes() {
  const [notes, setNotes] = useState(getActiveNotes());
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title');
  const [search, setSearch] = useState(title || '');

  const changeSearchParams = (keyword) => {
    setSearchParams({ title: keyword });
    handleSearch(keyword);
  }

  const onDelete = (id) => {
    deleteNote(id);
    setNotes((n) => (n = getActiveNotes()));
  };

  const onArchives = (id) => {
    archiveNote(id);
    setNotes((n) => (n = getActiveNotes()));
  };

  const handleSearch = (value) => {
    setSearch((s) => (s = value));
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <SearchBar onSearch={changeSearchParams} keyword={title} />
      <div className="bg-white p-4 rounded">
        <h3 className="text-2xl font-bold mb-4 text-gray-700 ">
          Catatan Aktif
        </h3>
        <NotesList notes={filteredNotes} onDelete={onDelete} onArchives={onArchives} />
      </div>
    </>
  );
}
