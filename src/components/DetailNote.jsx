import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import changeDateFormat from '../utils/dateFormatter';
import NotFound from '../pages/404';
import LoadingCard from './LoadingCard';
import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from '../data/network-data';
import { MdDelete, MdDriveFileMoveOutline } from 'react-icons/md';
import LocaleContext from '../context/localeContext';

export default function DetailNote() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getNote(id);
      setNote(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  const handleDelete = async (id) => {
    await deleteNote(id);
    navigate('/');
  };

  const handleArchive = async (id) => {
    await archiveNote(id);
    const { data } = await getNote(id);
    setNote(data);
  };

  const handleActive = async (id) => {
    await unarchiveNote(id);
    const { data } = await getNote(id);
    setNote(data);
  };

  if (isLoading) {
    return <LoadingCard fullWidth={true} />;
  }

  if (note === null && !isLoading) return <NotFound />;

  const { title, body, createdAt, archived } = note;

  const moveButton = (_) => {
    return (
      <button
        type="button"
        className="flex items-center gap-2 border-2 p-2 px-4 rounded text-sky-500 transition-all duration-300 group-hover:text-white  hover:text-green-700 hover:border-green-700 "
        onClick={() => {
          archived ? handleActive(id) : handleArchive(id);
        }}
      >
        <MdDriveFileMoveOutline className='text-2xl' />
        {archived ? (locale === 'id' ? 'Aktifkan' : 'Activate')  : (locale === 'id' ? 'Arsipkan' : 'Archive')}
      </button>
    );
  };

  return (
    <section
      className="px-8 py-14 flex flex-col
      gap-4 bg-white shadow rounded dark:bg-gray-700"
    >
      <h3 className="text-4xl md:text-6xl font-bold text-gray-600">
        {title}{' '}
        <span className="text-red-500">{archived ? '[ Archived ]' : ''}</span>
      </h3>
      <p className="text-gray-400 italic group-hover:text-white">
        {changeDateFormat(createdAt)}
      </p>
      <p className="text-2xl md:text-4xl text-gray-600">{body}</p>
      <div className="flex gap-8 justify-end">
        <button
          type="button"
          className="flex items-center gap-2 border-2 p-2 px-4 rounded text-sky-500 transition-all duration-300 group-hover:text-white  hover:text-red-700 hover:border-red-700"
          onClick={() => handleDelete(id)}
        >
          <MdDelete className='text-2xl' />
          {locale === 'id' ? 'Hapus Catatan' : 'Delete Note' }
        </button>

        {moveButton()}
      </div>
    </section>
  );
}
