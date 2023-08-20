import React from 'react';
import styles from './BigButton.module.css';

const BigButton = ({ buttonText, onClick }) => {
    return (
      <button className={styles.bigButton} onClick={onClick}>
        {buttonText}
      </button>
    );
  };

export default BigButton;