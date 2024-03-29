import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getNote } from '../data/data';
import changeDateFormat from '../utils/dateFormatter';
import NotFound from '../pages/404';
import { deleteNote, archiveNote, unarchiveNote } from '../data/data';
import { MdDelete, MdDriveFileMoveOutline } from 'react-icons/md';

export default function DetailNote() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState(getNote(id) || '');
  const { title, body, createdAt, archived } = note;
  const handleDelete = (id) => {
    deleteNote(id);
    navigate('/');
  };

  const handleArchive = (id) => {
    archiveNote(id);
    setNote(n => n = getNote(id))
  }

  const handleActive = (id) => {
    unarchiveNote(id);
    setNote(n => n = getNote(id))
  }

  const moveButton = (_) => {
    return (
      <button
        type="button"
        className="flex items-center gap-2 border-2 p-2 px-4 rounded text-sky-500 transition-all duration-300 group-hover:text-white  hover:text-green-700 hover:border-green-700"
        onClick={() => {
          archived ? handleActive(id) : handleArchive(id);
        }}
      >
        <MdDriveFileMoveOutline />
        {archived ? 'Aktifkan' : 'Arsipkan'} Catatan
      </button>
    );
  };

  if (note) {
    return (
      <section
        className="px-8 py-14 flex flex-col
      gap-4 bg-white shadow rounded"
      >
        <h3 className="text-6xl font-bold text-gray-600">
          {title}{' '}
          <span className="text-red-500">{archived ? '[ Arsip ]' : ''}</span>
        </h3>
        <p className="text-gray-400 italic group-hover:text-white">
          {changeDateFormat(createdAt)}
        </p>
        <p className="text-4xl text-gray-600">{body}</p>
        <div className="flex gap-8 justify-end">
          <button
            type="button"
            className="flex items-center gap-2 border-2 p-2 px-4 rounded text-sky-500 transition-all duration-300 group-hover:text-white  hover:text-red-700 hover:border-red-700"
            onClick={() => handleDelete(id)}
          >
            <MdDelete />
            Hapus Catatan
          </button>

          {moveButton()}
        </div>
      </section>
    );
  } else {
    return <NotFound />;
  }
}
