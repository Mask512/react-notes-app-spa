import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NotesList from './NotesList';
import SearchBar from './SearchBar';
import LoadingCards from './LoadingCards';
import { getActiveNotes, deleteNote, archiveNote } from '../data/network-data';

export default function ActiveNotes() {
  const [isLoading, setLoading] = useState(true);
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await updateNotes();
      setLoading(false);
    };
    fetchData();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title');
  const [search, setSearch] = useState(title || '');

  const changeSearchParams = (keyword) => {
    setSearchParams({ title: keyword });
    handleSearch(keyword);
  };

  const handleSearch = (value) => {
    setSearch((s) => (s = value));
  };

  const onDelete = async (id) => {
    await deleteNote(id);
    await updateNotes();
  };
  const onArchives = async (id) => {
    await archiveNote(id);
    await updateNotes();
  };

  const updateNotes = async () => {
    const { data } = await getActiveNotes();
    setNotes(data);
  };

  const filteredNotes = () => {
    return notes.filter((note) =>
      note.title.toLowerCase().includes(search.toLowerCase()),
    );
  };

  return (
    <>
      <SearchBar onSearch={changeSearchParams} keyword={title} />
      <div className="bg-white p-4 rounded">
        <h3 className="text-2xl font-bold mb-4 text-gray-700 ">
          Catatan Aktif
        </h3>
        {isLoading ? (
          <LoadingCards qty={5} />
        ) : (
          <NotesList
            notes={filteredNotes()}
            onDelete={onDelete}
            onArchives={onArchives}
          />
        )}
      </div>
    </>
  );
}
