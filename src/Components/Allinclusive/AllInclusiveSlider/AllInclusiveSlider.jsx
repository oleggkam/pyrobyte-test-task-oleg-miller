import React from 'react';
import styles from './AllInclusiveSlider.module.css';

const AllInclusiveSlider = ({ children, currentWidth }) => {
  const countWindowWidth = (currentWidth) => {
    return currentWidth <= 360 ? 328 : 1168;
  };
  const WINDOW_WIDTH = countWindowWidth(currentWidth);
  const [offset, setOffset] = React.useState(0);
  const handleLeftClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + WINDOW_WIDTH;
      return Math.min(newOffset, 0);
    });
  };
  const handleRightClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - WINDOW_WIDTH;
      const maxOffset = -(WINDOW_WIDTH * (children.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };
  React.useEffect(() => {
    setOffset(0);
  }, [WINDOW_WIDTH]);

  return (
    <div className={styles.container}>
      <div className={styles.switch}>
        <h2 className={styles.allinclusive}>Все включено</h2>
        <div className={styles.arrows}>
          <button className={styles.previous} onClick={handleLeftClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none">
              <path
                d="M0.271845 6.6375L5.5534 11.7375C5.73463 11.9125 5.95469 12 6.21359 12C6.47249 12 6.69256 11.9125 6.87379 11.7375L7.72816 10.875C7.90939 10.7 8 10.4875 8 10.2375C8 9.9875 7.90939 9.775 7.72816 9.6L4 6L7.72816 2.4C7.90939 2.225 8 2.0125 8 1.7625C8 1.5125 7.90939 1.3 7.72816 1.125L6.87379 0.2625C6.69256 0.0875005 6.47249 -6.67695e-08 6.21359 -7.80864e-08C5.95469 -8.94032e-08 5.73463 0.0875005 5.5534 0.2625L0.271845 5.3625C0.0906151 5.5375 2.73196e-07 5.75 2.62268e-07 6C2.5134e-07 6.25 0.090615 6.4625 0.271845 6.6375Z"
                fill="white"
              />
            </svg>
          </button>
          <button className={styles.next} onClick={handleRightClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none">
              <path
                d="M7.72816 6.6375L2.4466 11.7375C2.26537 11.9125 2.04531 12 1.78641 12C1.52751 12 1.30744 11.9125 1.12621 11.7375L0.271845 10.875C0.0906148 10.7 -6.61135e-08 10.4875 -7.70413e-08 10.2375C-8.79692e-08 9.9875 0.0906148 9.775 0.271845 9.6L4 6L0.271844 2.4C0.0906145 2.225 -4.36567e-07 2.0125 -4.47495e-07 1.7625C-4.58423e-07 1.5125 0.0906144 1.3 0.271844 1.125L1.12621 0.2625C1.30744 0.0875005 1.52751 -6.67695e-08 1.78641 -7.80864e-08C2.04531 -8.94032e-08 2.26537 0.0875005 2.4466 0.2625L7.72816 5.3625C7.90938 5.5375 8 5.75 8 6C8 6.25 7.90938 6.4625 7.72816 6.6375Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.window}>
        <div
          className={styles.slides}
          style={{
            transform: `translatex(${offset}px)`,
          }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AllInclusiveSlider;
