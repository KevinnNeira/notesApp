import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/NotesCard.module.css';
import NoteCard from './NoteCard';
import add from '../../public/add.svg';

export const Cards = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch('http://localhost:3000/getNotes');
        const data = await response.json();
        setNotes(data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);

  const handleClick = () => {
    navigate('/content');
  };

  return (
    <main className={styles.homeScreen}>
      <section>
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <NoteCard
              key={index}
              content={note.content}
              color={note.color}
            />
          ))
        ) : (
          <p>No notes available.</p>
        )}
        <div className={styles.avatarPlaceholder} onClick={handleClick}>
          <img id='image__button' src={add} alt="Add note" />
        </div>
      </section>
    </main>
  );
};

export default Cards;
