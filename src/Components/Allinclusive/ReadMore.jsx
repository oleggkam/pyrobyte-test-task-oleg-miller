import React from 'react';
import styles from './ReadMore.module.css';

const ReadMore = () => {
  return (
    <div className={styles.more}>
      Читать больше{' '}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="2" viewBox="0 0 16 2" fill="none">
        <rect width="16" height="2" fill="#AB955E" />
      </svg>
    </div>
  );
};

export default ReadMore;
