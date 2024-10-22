import React from "react";
import styles from '../styles/Notes.module.css';
import ActionButton from './ActionButton';
import add from '../../public/add.svg'
import image from '../../public/image.png' 
import zoom from '../../public/search.svg'
import info from '../../public/info_outline.svg'


export const Notes = () => {
  return (
    <main className={styles.notesContainer}>
      <section className={styles.homeScreenEmpty}>
        <header className={styles.header}>
          <h1 className={styles.title}>Notes</h1>
          <div className={styles.buttonContainer}>
          <ActionButton/>
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
        <button
          src={add}
          className={styles.floatingActionButton} 
          aria-label="Create new note"
        />
      </section>
    </main>
  );
}

export default Notes;