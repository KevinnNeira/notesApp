import React from 'react';
import styles from '../styles/NotesCard.module.css';
import NoteCard from './NoteCard';
import add from '../../public/add.svg'
import zoom from '../../public/search.svg'
import info from '../../public/info_outline.svg'

export const Cards = () => {
  const notes = [
    { content: 'UI concepts worth existing', color: 'pink' },
    { content: 'Book Review : The Design of Everyday Things by Don Norman', color: 'red' },
    { content: 'Animes produced by Ufotable', color: 'green' },
    { content: 'Mangas planned to read', color: 'yellow' },
    {
      content: 'Awesome tweets collection',
      color: 'cyan'
    },
    { content: 'List of free & open source apps', color: 'purple' }
  ];
  return (
    <main className={styles.homeScreen}>
      <header className={styles.header}>
        <h1 className={styles.title}>Notes</h1>
        <div className={styles.buttonGroup}>
        <button className={styles.actionButton} aria-label="Action 1">
            <img src={zoom} alt="Descripción 1" />
        </button>
        <button className={styles.actionButton} aria-label="Action 2">
            <img src={info} alt="Descripción 2" />
        </button>

        </div>
      </header>
      <section>
        {notes.map((note, index) => (
          <NoteCard
            key={index}
            content={note.content}
            color={note.color}
            extraContent={note.extraContent}
          />
        ))}
        <div className={styles.avatarPlaceholder}>
          <img id='image__button' src={add} alt="Descripción de la imagen" />
        </div>

      </section>
    </main>
  );
};

export default Cards;