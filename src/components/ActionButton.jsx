import React from "react";
import styles from '../styles/Notes.module.css';
import zoom from '../../public/search.svg'
import info from '../../public/info_outline.svg'


function ActionButton() {
  return (
    <button className={styles.actionButton} aria-label="Action button">
    <img src={info} />
    </button>
  );
}

export default ActionButton;