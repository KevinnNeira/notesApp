import React from "react";
import styles from '../styles/Notes.module.css';
import ActionButton from './ActionButton';
import add from '../../public/add.svg'
import image from '../../public/image.png' 
import { useNavigate } from 'react-router-dom';
import zoom from '../../public/search.svg'
import info from '../../public/info_outline.svg'


export const Notes = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/content')
  }

  return (
    <main className={styles.notesContainer}>
      <section className={styles.homeScreenEmpty}>
        <header className={styles.header}>
          <h1 className={styles.title}>Notes</h1>
          <div className={styles.buttonContainer}>
          <button className={styles.actionButton} aria-label="Action button">
            <img src={zoom} />
          </button>
          <ActionButton/>
          </div>
        </header>
        <img 
          loading="lazy" 
          src={image}
          className={styles.emptyStateImage} 
          alt="Empty state illustration"
        />
        <p className={styles.emptyStateText}>Create your first note !</p>
        <button src={add} className={styles.floatingActionButton} aria-label="Create new note" onClick={handleClick}/>
      </section>
    </main>
  );
}

export default Notes;