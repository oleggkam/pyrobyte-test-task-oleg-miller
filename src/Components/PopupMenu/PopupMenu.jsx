import React from 'react';
import styles from './PopupMenu.module.css';
import SubMenuItem from './SubMenu/SubMenuItem';
import PopupMenuSlider from './PopupMenuSlider/PopupMenuSlider';
import SubMenuMobile from './SubMenu/SubMenuMobile';

const PopupMenu = ({ popupMenuToogle }) => {
  const horizontalMenuItems = ['О комплексе', 'Блог', 'FAQ', 'Контакты'];
  const verticalMenuItems = [
    {
      SubMenuItemId: 0,
      name: 'Размещение',
      mobileSubMenuItems: [
        'Размещение Размещение Размещение',
        'Размещение Размещение',
        'Размещение Размещение',
        'Размещение Размещение',
      ],
    },
    {
      SubMenuItemId: 1,
      name: 'Медицина',
      mobileSubMenuItems: ['Клиника персонализированной медицины', 'Медицинский центр'],
    },
    {
      SubMenuItemId: 2,
      name: 'Мероприятия',
      mobileSubMenuItems: ['Мероприятия Мероприятия Мероприятия', 'Мероприятия'],
    },
    {
      SubMenuItemId: 3,
      name: 'Красота и восстановление',
      mobileSubMenuItems: ['Красота и восстановление'],
    },
    {
      SubMenuItemId: 4,
      name: 'Бары и рестораны',
      mobileSubMenuItems: ['Бары и рестораны'],
    },
    {
      SubMenuItemId: 5,
      name: 'Развлечения',
      mobileSubMenuItems: [
        'Развлечения',
        'Развлечения',
        'Развлечения',
        'Развлечения',
        'Развлечения',
        'Развлечения',
      ],
    },
    {
      SubMenuItemId: 6,
      name: 'Спорт',
      mobileSubMenuItems: ['Спорт'],
    },
    {
      SubMenuItemId: 7,
      name: 'Детям',
      mobileSubMenuItems: ['Детям'],
    },
    {
      SubMenuItemId: 8,
      name: 'Транспорт',
      mobileSubMenuItems: ['Транспорт', 'Транспорт', 'Транспорт'],
    },
  ];
  const [activeSubMenu, setActiveSubMenu] = React.useState(null);
  const [isMobileMode, setIsMobileMode] = React.useState(false);
  const wrapperRef = React.useRef(null);

  const observer = React.useRef(
    new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      setIsMobileMode(width <= 360);
    }),
  );
  React.useEffect(() => {
    observer.current.observe(wrapperRef.current);
  }, [wrapperRef, observer]);

  React.useEffect(() => {
    setActiveSubMenu(null);
  }, [isMobileMode]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <button className={styles.ru}>ru</button>
          <svg
            className={styles.logo}
            xmlns="http://www.w3.org/2000/svg"
            width="66"
            height="56"
            viewBox="0 0 66 56"
            fill="none">
            <path
              d="M32.9552 0H33.0624C34.2695 1.72383 35.4622 3.46044 36.5301 5.27365C39.0307 9.4747 40.9855 14.0429 41.8948 18.8568C42.5832 22.413 42.6792 26.0682 42.3238 29.6675C47.7878 23.7282 55.5187 19.9103 63.5762 19.216C63.3088 21.864 62.8173 24.4976 61.9208 27.0083C60.0958 32.2437 56.9724 36.9906 53.0485 40.9027C54.8607 40.7623 56.6874 40.7655 58.4964 40.9666C61.0868 41.2188 63.5954 41.9626 66 42.933C65.2252 44.0567 64.4631 45.1964 63.5602 46.2259C60.2463 50.063 55.7845 52.8275 50.9881 54.4268C45.5273 56.2369 39.4918 56.5944 33.9494 54.9232C33.5315 54.8243 33.1025 54.5306 32.6702 54.7237C28.3125 56.181 23.5785 56.3247 19.0815 55.4819C13.5695 54.4396 8.29443 51.9241 4.20085 48.0726C2.56789 46.5643 1.21671 44.7862 0 42.9346C1.22952 42.4622 2.46063 41.9865 3.73817 41.6577C6.74312 40.8724 9.88895 40.6346 12.9804 40.9219C9.07248 37.0688 5.98108 32.3634 4.13841 27.1935C3.20347 24.6253 2.68957 21.9294 2.41741 19.2176C10.4765 19.9087 18.2058 23.7314 23.6746 29.6691C23.1735 24.8535 23.5657 19.9342 24.9697 15.2926C26.6251 9.74285 29.5612 4.66393 32.9552 0ZM26.6859 19.1266C25.8711 23.1824 25.8727 27.3754 26.4922 31.4584C26.9917 34.5581 27.7233 37.6131 28.3445 40.6889C26.9501 38.6394 25.6277 36.5405 24.2413 34.4847C19.8868 28.1687 12.9547 23.733 5.43517 22.2311C6.76074 28.9843 10.5181 35.1263 15.5178 39.811C17.7111 41.862 20.2054 43.5555 22.5091 45.4757C20.2054 44.9553 17.9224 44.344 15.6107 43.8588C11.8149 43.1294 7.83976 43.174 4.10479 44.2131C7.14336 47.9305 11.3826 50.5658 15.9229 52.0662C21.2668 53.8203 27.2254 54.0214 32.5421 52.0598C33.0928 51.8028 33.6436 52.1539 34.1703 52.3056C39.3317 54.0166 45.0262 53.7341 50.154 52.039C54.6606 50.5339 58.8679 47.9098 61.8872 44.2131C58.9127 43.3831 55.7781 43.19 52.7123 43.5124C49.56 43.8285 46.5439 44.8612 43.4445 45.4533C45.0198 44.2754 46.5503 43.04 48.108 41.8365C54.3052 36.9635 59.0263 30.0075 60.5552 22.2279C52.7603 23.7905 45.5993 28.5023 41.2816 35.1854C40.0713 36.9714 38.9603 38.8309 37.6907 40.5707C38.2495 37.6338 38.9635 34.7257 39.4518 31.776C40.1065 27.6611 40.1434 23.4282 39.3477 19.3309C38.3359 13.9886 35.9585 8.99905 33 4.4676C30.0687 8.9352 27.7201 13.8609 26.6859 19.1266Z"
              fill="#D9C287"
            />
            <path
              d="M30.1119 17.5272C30.7827 15.1841 31.6728 12.8697 33.0144 10.8218C35.9265 15.6039 37.092 21.2734 37.1048 26.82C37.0728 32.3187 35.9105 37.9403 33.016 42.6792C31.5159 40.4079 30.5778 37.803 29.899 35.1806C28.487 29.4057 28.5446 23.2654 30.1119 17.5272Z"
              fill="#D9C287"
            />
          </svg>
          <div className={styles.horizontal}>
            {horizontalMenuItems.map((item, index) => {
              return (
                <div key={index} className={styles.horizontal_item}>
                  {item}
                </div>
              );
            })}
          </div>
          <div className={styles.right}>
            <div className={styles.key}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="8"
                viewBox="0 0 15 8"
                fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.87398 5C7.42994 6.72523 5.86384 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C5.86384 0 7.42994 1.27477 7.87398 3H11V1H14V3H15V5L7.87398 5ZM4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className={styles.enter}>Вход</div>
          </div>
          <div className={styles.close_container}>
            <button
              className={styles.close}
              onClick={() => {
                popupMenuToogle(false);
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none">
                <path d="M1.38092 0L28.9993 27.619L27.6183 29L0 1.38095L1.38092 0Z" fill="white" />
                <path
                  d="M27.6191 0L0.000743929 27.619L1.38166 29L29 1.38095L27.6191 0Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.vertical}>
          <div className={styles.top}>
            <div className={styles.line}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1"
                height="368"
                viewBox="0 0 1 368"
                fill="none">
                <path
                  opacity="0.24"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 0V368H0V0H1Z"
                  fill="#D9C287"
                />
              </svg>
            </div>
            <div className={styles.vertical_container} ref={wrapperRef}>
              <div className={styles.menu_container}>
                <div className={styles.vertical_window}>
                  {verticalMenuItems.map((item, index) => {
                    return (
                      <div key={index}>
                        <div
                          className={styles.vertical_item}
                          onMouseEnter={() => {
                            setActiveSubMenu(item.SubMenuItemId);
                          }}>
                          <div className={styles.text}>{item.name}</div>
                          {activeSubMenu === index && isMobileMode && (
                            <svg
                              className={styles.arrow}
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="8"
                              viewBox="0 0 12 8"
                              fill="none">
                              <path
                                d="M5.3625 7.72816L0.2625 2.4466C0.0875 2.26537 0 2.04531 0 1.78641C0 1.52751 0.0875 1.30744 0.2625 1.12621L1.125 0.271845C1.3 0.0906149 1.5125 0 1.7625 0C2.0125 0 2.225 0.0906149 2.4 0.271845L6 4L9.6 0.271845C9.775 0.0906149 9.9875 0 10.2375 0C10.4875 0 10.7 0.0906149 10.875 0.271845L11.7375 1.12621C11.9125 1.30744 12 1.52751 12 1.78641C12 2.04531 11.9125 2.26537 11.7375 2.4466L6.6375 7.72816C6.4625 7.90939 6.25 8 6 8C5.75 8 5.5375 7.90939 5.3625 7.72816Z"
                                fill="white"
                                fillOpacity="0.24"
                              />
                            </svg>
                          )}
                        </div>
                        {isMobileMode && (
                          <>
                            <div className={styles.mobile_border}></div>
                            <SubMenuMobile
                              isOpen={activeSubMenu === index ? true : false}
                              menuData={
                                verticalMenuItems[activeSubMenu === null ? 0 : activeSubMenu]
                                  .mobileSubMenuItems
                              }
                            />
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className={styles.vector}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="552"
                    viewBox="0 0 1 552"
                    fill="none">
                    <path
                      opacity="0.24"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 0V552H0V0H1Z"
                      fill="#D9C287"
                    />
                  </svg>
                </div>
                {activeSubMenu !== null && <SubMenuItem index={activeSubMenu} />}
              </div>
              <div className={styles.slider_container}>
                <PopupMenuSlider>
                  <div className={styles.slide}>
                    <svg
                      className={styles.angle}
                      xmlns="http://www.w3.org/2000/svg"
                      width="360"
                      height="306"
                      viewBox="0 0 360 306"
                      fill="none">
                      <path
                        d="M360 306H0L0.000133753 0C181.528 0 332.075 132.517 360 306Z"
                        fill="black"
                        fillOpacity="0.48"
                      />
                    </svg>
                    <div className={styles.slider_info}>
                      <div className={styles.slider_title}>Антистресс 1</div>
                      <div className={styles.slider_text}>10-21 дня</div>
                      <button className={styles.more}>Подробнее</button>
                    </div>
                  </div>
                  <div className={styles.slide}>
                    <svg
                      className={styles.angle}
                      xmlns="http://www.w3.org/2000/svg"
                      width="360"
                      height="306"
                      viewBox="0 0 360 306"
                      fill="none">
                      <path
                        d="M360 306H0L0.000133753 0C181.528 0 332.075 132.517 360 306Z"
                        fill="black"
                        fillOpacity="0.48"
                      />
                    </svg>
                    <div className={styles.slider_info}>
                      <div className={styles.slider_title}>Антистресс 2</div>
                      <div className={styles.slider_text}>10-21 дня</div>
                      <button className={styles.more}>Подробнее</button>
                    </div>
                  </div>
                  <div className={styles.slide}>
                    <svg
                      className={styles.angle}
                      xmlns="http://www.w3.org/2000/svg"
                      width="360"
                      height="306"
                      viewBox="0 0 360 306"
                      fill="none">
                      <path
                        d="M360 306H0L0.000133753 0C181.528 0 332.075 132.517 360 306Z"
                        fill="black"
                        fillOpacity="0.48"
                      />
                    </svg>
                    <div className={styles.slider_info}>
                      <div className={styles.slider_title}>Антистресс 3</div>
                      <div className={styles.slider_text}>10-21 дня</div>
                      <button className={styles.more}>Подробнее</button>
                    </div>
                  </div>
                </PopupMenuSlider>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            {isMobileMode && (
              <div className={styles.mobile_bottom}>
                <button className={styles.find}>Найти номер</button>
                <div className={styles.about}>
                  <div className={styles.about_line}>
                    <span>О комплексе</span>
                    <span>Блог</span>
                    <span>FAQ</span>
                  </div>
                  <div className={styles.about_line}>
                    <span>Афиша</span>
                    <span>Спецпредложения</span>
                  </div>
                  <div className={styles.about_line}>
                    <span>Важная информация</span>
                    <span>Контакты</span>
                  </div>
                </div>
                <div className={styles.socials}>
                  <div className={styles.social}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="18"
                      viewBox="0 0 12 18"
                      fill="none">
                      <path
                        d="M9.6688 10H7V18H3V10H0V7H3V4.53906C3 3.60156 3 2.5 4 1.5C5 0.5 6.37591 0 8.18796 0C10 0 11.5 0.5 11.5 0.5L10 3.5C10 3.5 8 3 7.5 3.5C7 4 7 4.26562 7 4.75781V7H10.5L9.6688 10Z"
                        fill="#D9C287"
                      />
                      <path
                        d="M9.6688 10H7V18H3V10H0V7H3V4.53906C3 3.60156 3 2.5 4 1.5C5 0.5 6.37591 0 8.18796 0C10 0 11.5 0.5 11.5 0.5L10 3.5C10 3.5 8 3 7.5 3.5C7 4 7 4.26562 7 4.75781V7H10.5L9.6688 10Z"
                        fill="#D9C287"
                      />
                    </svg>
                  </div>
                  <div className={styles.social}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="15"
                      viewBox="0 0 18 15"
                      fill="none">
                      <path
                        d="M16.1367 3.8125C16.1602 3.90385 16.1719 4.05228 16.1719 4.25781C16.1719 5.46815 15.9375 6.67849 15.4688 7.88882C15 9.07632 14.332 10.1725 13.4648 11.1773C12.6211 12.1593 11.5195 12.9585 10.1602 13.5751C8.80078 14.1917 7.30078 14.5 5.66016 14.5C3.59766 14.5 1.71094 13.9633 0 12.89C0.257812 12.9129 0.550781 12.9243 0.878906 12.9243C2.58984 12.9243 4.125 12.4105 5.48438 11.3828C4.66406 11.3828 3.9375 11.1544 3.30469 10.6977C2.69531 10.2181 2.27344 9.6244 2.03906 8.91647C2.27344 8.9393 2.49609 8.95072 2.70703 8.95072C3.03516 8.95072 3.36328 8.91647 3.69141 8.84796C3.12891 8.73377 2.625 8.50541 2.17969 8.16286C1.73438 7.82031 1.38281 7.40926 1.125 6.92969C0.867187 6.42728 0.738281 5.89062 0.738281 5.31971V5.2512C1.25391 5.54808 1.80469 5.70793 2.39062 5.73077C1.28906 5 0.738281 3.99519 0.738281 2.71635C0.738281 2.07692 0.914062 1.47175 1.26562 0.900841C2.17969 2.01983 3.29297 2.91046 4.60547 3.57272C5.94141 4.23498 7.35938 4.60036 8.85938 4.66887C8.8125 4.39483 8.78906 4.12079 8.78906 3.84675C8.78906 2.86478 9.14062 2.01983 9.84375 1.3119C10.5703 0.603966 11.4375 0.25 12.4453 0.25C13.5234 0.25 14.4258 0.626803 15.1523 1.38041C15.9961 1.22055 16.7812 0.935096 17.5078 0.524038C17.2266 1.36899 16.6875 2.03125 15.8906 2.51082C16.5938 2.41947 17.2969 2.22536 18 1.92849C17.4844 2.65925 16.8633 3.28726 16.1367 3.8125Z"
                        fill="#D9C287"
                      />
                    </svg>
                  </div>
                  <div className={styles.social}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none">
                      <path
                        d="M17.9598 5.30357C17.9866 6.02679 18 7.25893 18 9C18 10.7411 17.9866 11.9732 17.9598 12.6964C17.8795 14.3304 17.3839 15.6027 16.4732 16.5134C15.5893 17.3973 14.3304 17.8661 12.6964 17.9196C11.9732 17.9732 10.7411 18 9 18C7.25893 18 6.02679 17.9732 5.30357 17.9196C3.66964 17.8393 2.41071 17.3571 1.52679 16.4732C1.17857 16.1518 0.897321 15.7768 0.683036 15.3482C0.46875 14.9196 0.308036 14.5045 0.200893 14.1027C0.120536 13.7009 0.0803571 13.2321 0.0803571 12.6964C0.0267857 11.9732 0 10.7411 0 9C0 7.25893 0.0267857 6.01339 0.0803571 5.26339C0.160714 3.65625 0.642857 2.41071 1.52679 1.52679C2.41071 0.616072 3.66964 0.120536 5.30357 0.0401786C6.02679 0.0133929 7.25893 0 9 0C10.7411 0 11.9732 0.0133929 12.6964 0.0401786C14.3304 0.120536 15.5893 0.616072 16.4732 1.52679C17.3839 2.41071 17.8795 3.66964 17.9598 5.30357ZM15.6384 14.3036C15.7187 14.0893 15.7857 13.8214 15.8393 13.5C15.8929 13.1518 15.933 12.75 15.9598 12.2946C15.9866 11.8125 16 11.4241 16 11.1295C16 10.8348 16 10.4196 16 9.88393C16 9.34822 16 9.05357 16 9C16 8.91964 16 8.625 16 8.11607C16 7.58036 16 7.16518 16 6.87054C16 6.57589 15.9866 6.20089 15.9598 5.74554C15.933 5.26339 15.8929 4.86161 15.8393 4.54018C15.7857 4.19196 15.7187 3.91071 15.6384 3.69643C15.317 2.86607 15.1339 2.68304 14.3036 2.36161C14.0893 2.28125 13.808 2.21429 13.4598 2.16071C13.1384 2.10714 12.7366 2.06696 12.2545 2.04018C11.7991 2.01339 11.4241 2 11.1295 2C10.8616 2 10.4464 2 9.88393 2C9.34822 2 9.05357 2 9 2C8.94643 2 8.65179 2 8.11607 2C7.58036 2 7.16518 2 6.87054 2C6.57589 2 6.1875 2.01339 5.70536 2.04018C5.25 2.06696 4.84821 2.10714 4.5 2.16071C4.17857 2.21429 3.91071 2.28125 3.69643 2.36161C2.86607 2.68304 2.68304 2.86607 2.36161 3.69643C2.28125 3.91071 2.21429 4.19196 2.16071 4.54018C2.10714 4.86161 2.06696 5.26339 2.04018 5.74554C2.01339 6.20089 2 6.57589 2 6.87054C2 7.13839 2 7.55357 2 8.11607C2 8.65179 2 8.94643 2 9C2 9.10714 2 9.36161 2 9.76339C2 10.1384 2 10.4598 2 10.7277C2 10.9688 2 11.2902 2 11.692C2.02679 12.0938 2.05357 12.442 2.08036 12.7366C2.10714 13.0045 2.14732 13.2857 2.20089 13.5804C2.25446 13.875 2.30804 14.1161 2.36161 14.3036C2.70982 15.1339 2.89286 15.317 3.69643 15.6384C3.91071 15.7187 4.17857 15.7857 4.5 15.8393C4.84821 15.8929 5.25 15.933 5.70536 15.9598C6.1875 15.9866 6.5625 16 6.83036 16C7.125 16 7.54018 16 8.07589 16C8.63839 16 8.94643 16 9 16C9.08036 16 9.375 16 9.88393 16C10.4196 16 10.8348 16 11.1295 16C11.4241 16 11.7991 15.9866 12.2545 15.9598C12.7366 15.933 13.1384 15.8929 13.4598 15.8393C13.808 15.7857 14.0893 15.7187 14.3036 15.6384C15.1339 15.2902 15.317 15.1071 15.6384 14.3036Z"
                        fill="#D9C287"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12ZM9 14C11.7614 14 14 11.7614 14 9C14 6.23858 11.7614 4 9 4C6.23858 4 4 6.23858 4 9C4 11.7614 6.23858 14 9 14Z"
                        fill="#D9C287"
                      />
                      <path
                        d="M15 4C15 4.55228 14.5523 5 14 5C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3C14.5523 3 15 3.44772 15 4Z"
                        fill="#D9C287"
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles.telephon}>8 800 500 6847</div>
              </div>
            )}
            <div className={styles.info}>
              <div className={styles.mail}>info@mriyaresort.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupMenu;
