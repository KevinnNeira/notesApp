import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/NotesCard.module.css';
import NoteCard from './NoteCard';
import add from '../../public/add.svg';

export const Cards = ({ notes }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/content');
  };

  const earthColors = [
    'Beige',
    'Terracota',
    'Oliva',
    'cyan',
    'red',
    'Terracota',
    'Oliva',
    'cyan',
    'red',
    'red',
    'red'
  ];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * earthColors.length);
      return earthColors[randomIndex];
  };

  return (
    <main className={styles.homeScreen}>
      <section>
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <NoteCard 
              key={index}
              content={note.titulo}
              color={getRandomColor()}
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
