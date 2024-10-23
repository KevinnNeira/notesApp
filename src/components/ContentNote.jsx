import React from 'react';
import styles from '../styles/ContentNote.module.css';

export const ContentNote = () => {
    return (
        <main className={styles['content-editor']}>
        <section className={styles['content-wrapper']}>
            <header className={styles['header-container']}>
            <div className={styles['text-container']}>
                <button className={styles['action-button']} aria-label="Menu" />
                <h1 className={styles['keyboard-title']}>Title</h1>
                <input type="text" className={styles['input-placeholder']} placeholder="Type something..." />
            </div>
            <div className={styles['button-group']}>
                <button className={styles['action-button']} aria-label="Action 1" />
                <button className={styles['action-button']} aria-label="Action 2" />
            </div>
            </header>
        </section>
        </main>
    );
}

export default ContentNote;