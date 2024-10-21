import React from "react";
import styles from '../styles/Notes.module.css';
import ActionButton from './ActionButton';

export const Notes = () => {
  return (
    <main className={styles.notesContainer}>
      <section className={styles.homeScreenEmpty}>
        <header className={styles.header}>
          <h1 className={styles.title}>Notes</h1>
          <div className={styles.buttonContainer}>
            <ActionButton />
            <ActionButton />
          </div>
        </header>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/af8f9a2550cc53a17036188568fc58f517ad39267ed7360bc0d9aaf6a02d4285?placeholderIfAbsent=true&apiKey=f0a6d086379646449df0b08f79e5b0b6" 
          className={styles.emptyStateImage} 
          alt="Empty state illustration"
        />
        <p className={styles.emptyStateText}>Create your first note !</p>
        <button 
          className={styles.floatingActionButton} 
          aria-label="Create new note"
        />
      </section>
    </main>
  );
}

export default Notes;