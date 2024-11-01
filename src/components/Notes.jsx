import React, { useState, useEffect } from "react";
import styles from '../styles/Notes.module.css';
import styles2 from '../styles/ContentNote.module.css'
import ActionButton from './ActionButton';
import image from '../../public/image.png'; 
import { useNavigate } from 'react-router-dom';
import zoom from '../../public/search.svg';
import Cards from '../components/AllNotes';

export const Notes = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch('https://notes-app-drab-nine.vercel.app/getNotes');
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

  const handleCardClick = (note) => {
    navigate('/content', { state: { title: note.titulo, content: note.contenido } });
  };

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
    if (!showSearch) setSearchQuery('');
};

  const filteredNotes = notes.filter(note =>
    note.titulo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className={styles.notesContainer}>
      <section className={styles.homeScreenEmpty}>
      <header className={styles.header}>
  <div className={styles.titleContainer}>
    {showSearch ? (
      <input
        type="text"
        className={styles2.searchInput}
        placeholder="Search notes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    ) : (
      <div id="title">
      <h1 className={styles.title}>Notes</h1>
      </div>
    )}
  </div>
  <div className={styles.buttonContainer}>
    <button className={styles.actionButton} aria-label="Search button" onClick={handleSearchToggle}>
      <img src={zoom} alt="Search" />
    </button>
    <ActionButton />
  </div>
</header>
        {filteredNotes.length > 0 ? (
          <Cards notes={filteredNotes} onCardClick={handleCardClick} />
        ) : (
          !showSearch && (
            <>
              <img 
                loading="lazy" 
                src={image}
                className={styles.emptyStateImage} 
                alt="Empty state illustration"
              />
              <p className={styles.emptyStateText}>Create your first note!</p>
            </>
          )
        )}
      </section>
    </main>
  );
};

export default Notes;
