import React from 'react';
import styles from '../styles/NotesCard.module.css';
import { useNavigate } from 'react-router-dom';

const NoteCard = ({ content, color }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/notesApp/content');
  };
  const cardClass = `${styles.noteCard} ${styles[color]}`;

  return (
    <article className={cardClass} onClick={handleClick}>
      <p>{content}</p>
    </article>
  );
};

export default NoteCard;
