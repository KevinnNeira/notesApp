import React from 'react';
import styles from '../styles/NotesCard.module.css';

const NoteCard = ({ content, color }) => {
  const cardClass = `${styles.noteCard} ${styles[color]}`;

  return (
    <article className={cardClass}>
      <p>{content}</p>
    </article>
  );
};

export default NoteCard;
