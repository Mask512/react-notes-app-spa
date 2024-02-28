import { useContext } from 'react';
import NoteCard from './NoteCard.jsx';
import PropTypes from 'prop-types';
import LocaleContext from '../context/localeContext.js';

export default function NotesList({ notes, onDelete, onArchives, onActivate }) {
  const { locale } = useContext(LocaleContext)
  if (notes.length) {
    return (
      <div className="flex gap-4 flex-wrap">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            {...note}
            onDelete={onDelete}
            onArchives={onArchives}
            onActivate={onActivate}
          />
        ))}
      </div>
    );
  }

  return <p className="italic font-semibold">{ locale === 'id' ? 'Tidak ada Catatan Ditemukan' : 'Notes Not found'} </p>;
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
  onArchives: PropTypes.func,
  onActivate: PropTypes.func,
};
