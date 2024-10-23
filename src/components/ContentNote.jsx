import React, { useState } from 'react';
import styles from '../styles/ContentNote.module.css';
import save from '../../public/save.svg'
import visibility from '../../public/visibility.svg'
import back from '../../public/Vector.svg'

export const ContentNote = () => {
    const [title, setTitle] = useState('Title');
    const [value, setValue] = useState('');

    const handleFocus = () => {
        setValue('');
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    return (
        <main className={styles['content-editor']}>
            <section className={styles['content-wrapper']}>
                <header className={styles['header-container']}>
                    <div className={styles['text-container']}>
                    <button className={styles['action-button']} aria-label="Menu">
                        <img id='image__menu__note' src={back} alt="Menu" />
                    </button>

                        <input type="text" className={styles['content-title']} value={title} onChange={handleTitleChange} 
                        />
                        <input type="text" className={styles['input-placeholder']} placeholder="Type something..." value={value} onFocus={handleFocus} onChange={handleChange} 
                        />
                    </div>
                    <div className={styles['button-group']}>
                    <button className={styles['action-button']} aria-label="Action 1">
                        <img src={visibility} alt="Descripción 1" />
                    </button>
                    <button className={styles['action-button']} aria-label="Action 2">
                        <img src={save} alt="Descripción 2" />
                    </button>
                    </div>
                </header>
            </section>
        </main>
    );
};

export default ContentNote;
