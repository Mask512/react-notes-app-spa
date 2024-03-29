import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../data/data';

export default function AddNotes() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const limit = 25;

  const onTitleChange = (event) => {
    const { value } = event.target;
    if (value.length <= limit) {
      setTitle((t) => (t = value));
    }
  };

  const onBodyChange = (event) => {
    setBody((b) => (b = event.target.value));
  };

  const onSave = (event) => {
    event.preventDefault();
    addNote({ title, body });
    navigate('/');
  };

  const charLeftColor = () =>
    limit - title.length <= 0 ? 'text-red-800 font-bold' : 'text-gray-500';

  return (
    <form className="p-4 bg-white shadow rounded" onSubmit={onSave}>
      <h2 className="text-2xl font-bold text-gray-600">Buat Catatan</h2>
      <div className="mt-4">
        <label htmlFor="title" className="block mb-1 text-gray-600">
          Judul
          <p className={`float-right text-sm ${charLeftColor()}`}>
            Karakter Tersisa : <span>{limit - title.length}</span> Karakter
          </p>
        </label>

        <input
          type="text"
          id="title"
          className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
          value={title}
          onChange={onTitleChange}
        />
      </div>

      <div>
        <label htmlFor="body" className="block my-1 text-gray-600">
          Catatan
        </label>
        <textarea
          id="body"
          rows="23"
          className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
          value={body}
          onChange={onBodyChange}
        ></textarea>
      </div>
      <button
        type="submit"
        className="py-2 px-4 bg-sky-500 text-white rounded hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
      >
        Simpan
      </button>
    </form>
  );
}
