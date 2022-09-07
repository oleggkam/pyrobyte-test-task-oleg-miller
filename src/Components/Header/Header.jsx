import React from 'react';
import styles from './Header.module.css';
import PopupMenu from '../PopupMenu/PopupMenu';

const Header = () => {
  const menuData = ['о комплексе', 'блог', 'faq', 'контакты'];
  const [popupMenuIsOpen, setPopupMenuIsOpen] = React.useState(false);
  const popupMenuToogle = (toogle) => {
    setPopupMenuIsOpen(toogle);
  };
  return (
    <>
      {popupMenuIsOpen && <PopupMenu popupMenuToogle={popupMenuToogle} />}
      <div className={styles.header}>
        <div className={styles.header_left}>
          <button
            className={styles.open}
            onClick={() => {
              popupMenuToogle(true);
            }}>
            <svg
              width="32"
              height="26"
              viewBox="0 0 32 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H32V2H0V0Z" fill="white" />
              <path d="M0 12H32V14H0V12Z" fill="white" />
              <path d="M0 24H24V26H0V24Z" fill="white" />
            </svg>
          </button>
          <div className={styles.header_left_menu}>
            {menuData.map((item, index) => (
              <div className={`${styles.header_left_menu_item} ${styles.menu_text}`} key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.center_icons}>
          <svg
            className={styles.logo}
            width="66"
            height="56"
            viewBox="0 0 66 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32.9552 0H33.0624C34.2695 1.72383 35.4622 3.46044 36.5301 5.27365C39.0307 9.4747 40.9855 14.0429 41.8948 18.8568C42.5832 22.413 42.6792 26.0682 42.3238 29.6675C47.7878 23.7282 55.5187 19.9103 63.5762 19.216C63.3088 21.864 62.8173 24.4976 61.9208 27.0083C60.0958 32.2437 56.9724 36.9906 53.0485 40.9027C54.8607 40.7623 56.6874 40.7655 58.4964 40.9666C61.0868 41.2188 63.5954 41.9626 66 42.933C65.2252 44.0567 64.4631 45.1964 63.5602 46.2259C60.2463 50.063 55.7845 52.8275 50.9881 54.4268C45.5273 56.2369 39.4918 56.5944 33.9494 54.9232C33.5315 54.8243 33.1025 54.5306 32.6702 54.7237C28.3125 56.181 23.5785 56.3247 19.0815 55.4819C13.5695 54.4396 8.29443 51.9241 4.20085 48.0726C2.56789 46.5643 1.21671 44.7862 0 42.9346C1.22952 42.4622 2.46063 41.9865 3.73817 41.6577C6.74312 40.8724 9.88895 40.6346 12.9804 40.9219C9.07248 37.0688 5.98108 32.3634 4.13841 27.1935C3.20347 24.6253 2.68957 21.9294 2.41741 19.2176C10.4765 19.9087 18.2058 23.7314 23.6746 29.6691C23.1735 24.8535 23.5657 19.9342 24.9697 15.2926C26.6251 9.74285 29.5612 4.66393 32.9552 0ZM26.6859 19.1266C25.8711 23.1824 25.8727 27.3754 26.4922 31.4584C26.9917 34.5581 27.7233 37.6131 28.3445 40.6889C26.9501 38.6394 25.6277 36.5405 24.2413 34.4847C19.8868 28.1687 12.9547 23.733 5.43517 22.2311C6.76074 28.9843 10.5181 35.1263 15.5178 39.811C17.7111 41.862 20.2054 43.5555 22.5091 45.4757C20.2054 44.9553 17.9224 44.344 15.6107 43.8588C11.8149 43.1294 7.83976 43.174 4.10479 44.2131C7.14336 47.9305 11.3826 50.5658 15.9229 52.0662C21.2668 53.8203 27.2254 54.0214 32.5421 52.0598C33.0928 51.8028 33.6436 52.1539 34.1703 52.3056C39.3317 54.0166 45.0262 53.7341 50.154 52.039C54.6606 50.5339 58.8679 47.9098 61.8872 44.2131C58.9127 43.3831 55.7781 43.19 52.7123 43.5124C49.56 43.8285 46.5439 44.8612 43.4445 45.4533C45.0198 44.2754 46.5503 43.04 48.108 41.8365C54.3052 36.9635 59.0263 30.0075 60.5552 22.2279C52.7603 23.7905 45.5993 28.5023 41.2816 35.1854C40.0713 36.9714 38.9603 38.8309 37.6907 40.5707C38.2495 37.6338 38.9635 34.7257 39.4518 31.776C40.1065 27.6611 40.1434 23.4282 39.3477 19.3309C38.3359 13.9886 35.9585 8.99905 33 4.4676C30.0687 8.9352 27.7201 13.8609 26.6859 19.1266Z"
              fill="#D9C287"
            />
            <path
              d="M30.1119 17.5272C30.7827 15.1841 31.6728 12.8697 33.0144 10.8218C35.9265 15.6039 37.092 21.2734 37.1048 26.82C37.0728 32.3187 35.9105 37.9403 33.016 42.6792C31.5159 40.4079 30.5778 37.803 29.899 35.1806C28.487 29.4057 28.5446 23.2654 30.1119 17.5272Z"
              fill="#D9C287"
            />
          </svg>
          <svg
            className={styles.stars}
            width="73"
            height="8"
            viewBox="0 0 73 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.5 0L5.56227 3.05574H9L6.21882 4.94426L7.28118 8L4.5 6.11148L1.71882 8L2.78118 4.94426L0 3.05574H3.43773L4.5 0Z"
              fill="#D9C287"
            />
            <path
              d="M20.5 0L21.5623 3.05574H25L22.2188 4.94426L23.2812 8L20.5 6.11148L17.7188 8L18.7812 4.94426L16 3.05574H19.4377L20.5 0Z"
              fill="#D9C287"
            />
            <path
              d="M36.5 0L37.5623 3.05574H41L38.2188 4.94426L39.2812 8L36.5 6.11148L33.7188 8L34.7812 4.94426L32 3.05574H35.4377L36.5 0Z"
              fill="#D9C287"
            />
            <path
              d="M52.5 0L53.5623 3.05574H57L54.2188 4.94426L55.2812 8L52.5 6.11148L49.7188 8L50.7812 4.94426L48 3.05574H51.4377L52.5 0Z"
              fill="#D9C287"
            />
            <path
              d="M68.5 0L69.5623 3.05574H73L70.2188 4.94426L71.2812 8L68.5 6.11148L65.7188 8L66.7812 4.94426L64 3.05574H67.4377L68.5 0Z"
              fill="#D9C287"
            />
          </svg>
        </div>
        <div className={styles.header_right}>
          <div className={styles.lang}>
            <div className={`${styles.header_right_menu_item} ${styles.menu_text}`}>ru</div>
            <div
              className={`${styles.header_right_menu_item} ${styles.menu_text} ${styles.no_active_lang}`}>
              eng
            </div>
          </div>
          <div className={styles.login_tel_container}>
            <div className={styles.login_container}>
              <svg
                className={styles.key}
                width="15"
                height="8"
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.87398 5C7.42994 6.72523 5.86384 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C5.86384 0 7.42994 1.27477 7.87398 3H11V1H14V3H15V5L7.87398 5ZM4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                  fill="white"
                />
              </svg>
              <span className={`${styles.login} ${styles.menu_text}`} href="#">
                Вход
              </span>
            </div>
            <span className={`${styles.telephon} ${styles.menu_text}`}>8 800 500 6847</span>
            <div></div>
          </div>
          <div className={styles.key_360}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="16"
              viewBox="0 0 30 16"
              fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.748 10C14.8599 13.4505 11.7277 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C11.7277 0 14.8599 2.54955 15.748 6H22V2H28V6H30V10L15.748 10ZM8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
                fill="#3D3C3C"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
