import React from 'react';
import styles from '../styles/NotesCard.module.css';

const NoteCard = ({ content, color, extraContent }) => {
  const cardClass = `${styles.noteCard} ${styles[`${color}Card`]}`;

  return (
    <article className={cardClass}>
      <p>{content}</p>
      {extraContent}
    </article>
  );
};

export default NoteCard;