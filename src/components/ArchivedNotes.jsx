import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NotesList from './NotesList';
import SearchBar from './SearchBar';
import LoadingCards from './LoadingCards';
import {
  getArchivedNotes,
  deleteNote,
  unarchiveNote,
} from '../data/network-data';

export default function ArchivedNotes() {
  const [isLoading, setLoading] = useState(true);
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      await updateNotes();
      setLoading(false);
    };
    fetchNotes();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title');
  const [search, setSearch] = useState(title || '');

  const changeSearchParams = (keyword) => {
    setSearchParams({ title: keyword });
    handleSearch(keyword);
  };

  const updateNotes = async () => {
    const { data } = await getArchivedNotes();
    setNotes(data);
  };

  const onDelete = async (id) => {
    await deleteNote(id);
    await updateNotes();
  };
  const onActivate = async (id) => {
    await unarchiveNote(id);
    await updateNotes();
  };

  const handleSearch = (value) => {
    setSearch((s) => (s = value));
  };

  const filteredNotes = () => {
    return notes.filter((note) =>
      note.title.toLowerCase().includes(search.toLowerCase()),
    );
  };

  if (isLoading) {
    return (
      <>
        <SearchBar onSearch={changeSearchParams} keyword={title} />
        <div className="bg-white p-4 rounded">
          <h3 className="text-2xl font-bold mb-4 text-gray-700 ">
            Arsip Catatan
          </h3>
          <LoadingCards qty={5} />
        </div>
      </>
    );
  }
  return (
    <>
      <SearchBar onSearch={changeSearchParams} keyword={title} />
      <div className="bg-white p-4 rounded">
        <h3 className="text-2xl font-bold mb-4 text-gray-700 ">
          Arsip Catatan
        </h3>
        <NotesList
          notes={filteredNotes()}
          onDelete={onDelete}
          onActivate={onActivate}
        />
      </div>
    </>
  );
}
