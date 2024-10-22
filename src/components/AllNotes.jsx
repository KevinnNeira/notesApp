import React from 'react';
import styles from '../styles/NotesCard.module.css';
import NoteCard from './NoteCard';

export const Cards = () => {
  const notes = [
    { content: 'UI concepts worth existing', color: 'pink' },
    { content: 'Book Review : The Design of Everyday Things by Don Norman', color: 'red' },
    { content: 'Animes produced by Ufotable', color: 'green' },
    { content: 'Mangas planned to read', color: 'yellow' },
    {
      content: 'Awesome tweets collection',
      color: 'cyan',
      extraContent: <div className={styles.avatarPlaceholder} />
    },
    { content: 'List of free & open source apps', color: 'purple' }
  ];

  return (
    <main className={styles.homeScreen}>
      <header className={styles.header}>
        <h1 className={styles.title}>Notes</h1>
        <div className={styles.buttonGroup}>
          <button className={styles.actionButton} aria-label="Action 1" />
          <button className={styles.actionButton} aria-label="Action 2" />
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
      </section>
    </main>
  );
};

export default Cards;