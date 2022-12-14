import React from 'react';
import styles from './Choose.module.css';

const Choose = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.text}>Выберите свой отдых</h2>
      <div className={styles.form}>
        <div className={styles.types}>
          <span>Семейный отдых</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="5"
            viewBox="0 0 10 5"
            fill="none">
            <path d="M0 0H10L5 5L0 0Z" fill="#D9C287" />
          </svg>
        </div>
        <div className={styles.date}>
          <span>пт, 8 мая — вс, 17 мая</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 0C1.79083 0 0 1.79086 0 4V18C0 20.2091 1.79083 22 4 22H19C21.2092 22 23 20.2091 23 18V4C23 1.79086 21.2092 0 19 0H4ZM21 5H2V20H21V5Z"
              fill="#D9C287"
            />
            <path
              d="M8 8C8 7.44772 8.44772 7 9 7H10C10.5523 7 11 7.44772 11 8V9C11 9.55228 10.5523 10 10 10H9C8.44772 10 8 9.55228 8 9V8Z"
              fill="#D9C287"
            />
            <path
              d="M12 8C12 7.44772 12.4477 7 13 7H14C14.5523 7 15 7.44772 15 8V9C15 9.55228 14.5523 10 14 10H13C12.4477 10 12 9.55228 12 9V8Z"
              fill="#D9C287"
            />
            <path
              d="M16 8C16 7.44772 16.4477 7 17 7H18C18.5523 7 19 7.44772 19 8V9C19 9.55228 18.5523 10 18 10H17C16.4477 10 16 9.55228 16 9V8Z"
              fill="#D9C287"
            />
            <path
              d="M4 12C4 11.4477 4.44772 11 5 11H6C6.55228 11 7 11.4477 7 12V13C7 13.5523 6.55228 14 6 14H5C4.44772 14 4 13.5523 4 13V12Z"
              fill="#D9C287"
            />
            <path
              d="M8 12C8 11.4477 8.44772 11 9 11H10C10.5523 11 11 11.4477 11 12V13C11 13.5523 10.5523 14 10 14H9C8.44772 14 8 13.5523 8 13V12Z"
              fill="#D9C287"
            />
            <path
              d="M12 12C12 11.4477 12.4477 11 13 11H14C14.5523 11 15 11.4477 15 12V13C15 13.5523 14.5523 14 14 14H13C12.4477 14 12 13.5523 12 13V12Z"
              fill="#D9C287"
            />
            <path
              d="M16 12C16 11.4477 16.4477 11 17 11H18C18.5523 11 19 11.4477 19 12V13C19 13.5523 18.5523 14 18 14H17C16.4477 14 16 13.5523 16 13V12Z"
              fill="#D9C287"
            />
            <path
              d="M4 16C4 15.4477 4.44772 15 5 15H6C6.55228 15 7 15.4477 7 16V17C7 17.5523 6.55228 18 6 18H5C4.44772 18 4 17.5523 4 17V16Z"
              fill="#D9C287"
            />
            <path
              d="M8 16C8 15.4477 8.44772 15 9 15H10C10.5523 15 11 15.4477 11 16V17C11 17.5523 10.5523 18 10 18H9C8.44772 18 8 17.5523 8 17V16Z"
              fill="#D9C287"
            />
            <path
              d="M12 16C12 15.4477 12.4477 15 13 15H14C14.5523 15 15 15.4477 15 16V17C15 17.5523 14.5523 18 14 18H13C12.4477 18 12 17.5523 12 17V16Z"
              fill="#D9C287"
            />
          </svg>
        </div>
        <div className={styles.guests}>
          <span>2 взрослых &nbsp;•&nbsp; без детей &nbsp;•&nbsp; 1 номер</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.0002 4C14.0002 6.20914 12.2095 8 10.0002 8C7.79114 8 6.00024 6.20914 6.00024 4C6.00024 1.79086 7.79114 0 10.0002 0C12.2095 0 14.0002 1.79086 14.0002 4ZM10 6C11.1046 6 12 5.10457 12 4C12 2.89543 11.1046 2 10 2C8.89539 2 8 2.89543 8 4C8 5.10457 8.89539 6 10 6Z"
              fill="#D9C287"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 18C2.19238 20.394 6.10718 22 10 22C13.8928 22 17.8076 20.394 20 18C18.7288 13.3285 14.4814 10 10.0002 10C5.51904 10 1.27124 13.3285 0 18ZM2 17.3333C3.75391 18.9294 6.88574 20 10 20C13.1143 20 16.2461 18.9294 18 17.3333C16.983 14.219 13.5852 12 10.0002 12C6.41528 12 3.01697 14.219 2 17.3333Z"
              fill="#D9C287"
            />
          </svg>
        </div>
        <button className={styles.find}>Найти</button>
      </div>
    </section>
  );
};

export default Choose;
