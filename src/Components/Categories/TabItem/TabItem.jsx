import React from 'react';
import styles from './TabItem.module.css';

const TabItem = ({ category, img, text }) => {
  return (
    <div className={styles.item}>
      <img src={img} alt="tab picture" />
      {(category === 0 || category === 1) && (
        <>
          <svg
            className={styles.angle}
            xmlns="http://www.w3.org/2000/svg"
            width="198"
            height="168"
            viewBox="0 0 198 168"
            fill="none">
            <path
              d="M197.454 168H8C3.58173 168 0 164.418 0 160V0C99.565 0 182.137 72.7544 197.454 168Z"
              fill="black"
              fillOpacity="0.56"
            />
          </svg>
          <div className={styles.text}>
            <div className={styles.discount}>{text[0]}</div>
            <div className={styles.description}>{text[1]}</div>
          </div>
        </>
      )}
      {category === 2 && (
        <>
          <svg
            className={styles.angle_2}
            xmlns="http://www.w3.org/2000/svg"
            width="360"
            height="72"
            viewBox="0 0 360 72"
            fill="none">
            <path
              d="M360 34.1338V64C360 68.4183 356.418 72 352 72H8C3.58173 72 0 68.4183 0 64V4.93753C32.8906 1.67195 66.2501 0 100 0C189.933 0 277.094 11.8718 360 34.1338Z"
              fill="black"
              fillOpacity="0.56"
            />
          </svg>
          <div className={styles.text}>
            <div className={styles.description_2}>{text[0]}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default TabItem;
