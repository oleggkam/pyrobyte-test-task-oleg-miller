import React from 'react';
import styles from './PopupMenuSlider.module.css';

const SLIDES_NUMBER = 3;

const PopupMenuSlider = ({ children }) => {
  const [currentSlideNumber, setCurrentSlideNumber] = React.useState(0);
  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (currentSlideNumber + direction < 0) {
      slideNumber = SLIDES_NUMBER - 1;
    } else {
      slideNumber = (currentSlideNumber + direction) % SLIDES_NUMBER;
    }
    setCurrentSlideNumber(slideNumber);
  };
  React.useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [3, currentSlideNumber]);

  return (
    <div className={styles.container}>
      <div className={styles.switch}>
        {new Array(3).fill(0).map((_, index) => {
          return (
            <div
              className={`${styles.button} ${
                currentSlideNumber === index ? `${styles.active}` : ''
              }`}
              key={index}
              onClick={() => {
                setCurrentSlideNumber(index);
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="24"
                viewBox="0 0 12 24"
                fill="none">
                <path
                  d="M8.89417 23.5911C6.08207 22.8376 3.6398 21.0875 2.02237 18.6668C0.404934 16.2462 -0.27734 13.3201 0.102661 10.4337C0.482662 7.54729 1.89902 4.89748 4.08785 2.97792C6.27668 1.05837 9.0887 2.19797e-07 12 0V1.2C9.37983 1.2 6.84901 2.15253 4.87906 3.88013C2.90912 5.60773 1.6344 7.99256 1.2924 10.5903C0.950396 13.1881 1.56444 15.8216 3.02013 18.0002C4.47582 20.1787 6.67387 21.7538 9.20475 22.432L8.89417 23.5911Z"
                  fill="#D9C287"
                />
              </svg>
            </div>
          );
        })}
      </div>
      <div className={styles.window}>
        <div className={styles.slides}>{children[currentSlideNumber]}</div>
      </div>
    </div>
  );
};

export default PopupMenuSlider;
