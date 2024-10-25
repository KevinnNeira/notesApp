import React, { useState, useEffect } from "react";
import styles from '../styles/Notes.module.css';
import ActionButton from './ActionButton';
import image from '../../public/image.png'; 
import { useNavigate } from 'react-router-dom';
import zoom from '../../public/search.svg';
import { Cards } from '../components/AllNotes';

export const Notes = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch('http://localhost:3000/getNotes');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setNotes(data);
        console.log("Fetched notes:", data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, []);

  const handleClick = () => {
    navigate('/content');
  };

  return (
    <main className={styles.notesContainer}>
      <section className={styles.homeScreenEmpty}>
        <header className={styles.header}>
          <h1 className={styles.title}>Notes</h1>
          <div className={styles.buttonContainer}>
            <button className={styles.actionButton} aria-label="Action button">
              <img src={zoom} alt="Search" />
            </button>
            <ActionButton />
          </div>
        </header>
        {notes.length > 0 ? (
          <Cards notes={notes} />
        ) : (
          <>
            <img 
              loading="lazy" 
              src={image}
              className={styles.emptyStateImage} 
              alt="Empty state illustration"
            />
            <p className={styles.emptyStateText}>Create your first note!</p>
          </>
        )}
      </section>
    </main>
  );
};

export default Notes;
