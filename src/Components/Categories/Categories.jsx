import React from 'react';
import styles from './Categories.module.css';
import TabItem from './TabItem/TabItem';

const Categories = () => {
  const tabNames = ['Спецпредложения', 'Афиша', 'Категории отдыха'];
  const [activeCategory, setActiveCategory] = React.useState(0);
  const tabData = [
    {
      category: 0,
      img: 'TabItems/1.png',
      text: ['-20%', 'Для тех кто рядом'],
    },
    {
      category: 0,
      img: 'TabItems/5.png',
      text: ['-10%', 'Раннее бронирование'],
    },
    {
      category: 1,
      img: 'TabItems/1.png',
      text: ['-20%', 'Для тех кто рядом'],
    },
    {
      category: 2,
      img: 'TabItems/4.png',
      text: ['Семейный отдых'],
    },
    {
      category: 2,
      img: 'TabItems/2.png',
      text: ['Оздоровление'],
    },
    {
      category: 2,
      img: 'TabItems/3.png',
      text: ['Релакс и красота'],
    },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.categories_container}>
        <div className={styles.tabs}>
          {tabNames.map((item, index) => (
            <div
              key={index}
              className={`${styles.tab}` + ` ${activeCategory === index ? `${styles.active}` : ''}`}
              onClick={() => {
                setActiveCategory(index);
              }}>
              <div className={styles.text}>{item}</div>
            </div>
          ))}
        </div>
        <div className={styles.arrows}>
          <button
            disabled={activeCategory === 0 ? 'dasbled' : ''}
            onClick={() => {
              setActiveCategory(activeCategory - 1);
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none">
              <path
                opacity="0.16"
                d="M0.271845 6.6375L5.5534 11.7375C5.73463 11.9125 5.95469 12 6.21359 12C6.47249 12 6.69256 11.9125 6.87379 11.7375L7.72816 10.875C7.90939 10.7 8 10.4875 8 10.2375C8 9.9875 7.90939 9.775 7.72816 9.6L4 6L7.72816 2.4C7.90939 2.225 8 2.0125 8 1.7625C8 1.5125 7.90939 1.3 7.72816 1.125L6.87379 0.2625C6.69256 0.0875005 6.47249 -6.67695e-08 6.21359 -7.80864e-08C5.95469 -8.94032e-08 5.73463 0.0875005 5.5534 0.2625L0.271845 5.3625C0.0906151 5.5375 2.73196e-07 5.75 2.62268e-07 6C2.5134e-07 6.25 0.090615 6.4625 0.271845 6.6375Z"
                fill="#3D3C3C"
              />
            </svg>
          </button>
          <button
            disabled={activeCategory === 2 ? 'dasbled' : ''}
            onClick={() => {
              setActiveCategory(activeCategory + 1);
            }}>
            <svg
              className={styles.right}
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none">
              <path
                opacity="0.16"
                d="M7.72816 6.6375L2.4466 11.7375C2.26537 11.9125 2.04531 12 1.78641 12C1.52751 12 1.30744 11.9125 1.12621 11.7375L0.271845 10.875C0.0906148 10.7 -6.61135e-08 10.4875 -7.70413e-08 10.2375C-8.79692e-08 9.9875 0.0906148 9.775 0.271845 9.6L4 6L0.271844 2.4C0.0906145 2.225 -4.36567e-07 2.0125 -4.47495e-07 1.7625C-4.58423e-07 1.5125 0.0906144 1.3 0.271844 1.125L1.12621 0.2625C1.30744 0.0875005 1.52751 -6.67695e-08 1.78641 -7.80864e-08C2.04531 -8.94032e-08 2.26537 0.0875005 2.4466 0.2625L7.72816 5.3625C7.90938 5.5375 8 5.75 8 6C8 6.25 7.90938 6.4625 7.72816 6.6375Z"
                fill="#3D3C3C"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.tabs_container}>
        {tabData
          .filter((item) => item.category === activeCategory)
          .map((item, index) => {
            return <TabItem key={index} img={item.img} category={item.category} text={item.text} />;
          })}
      </div>
    </section>
  );
};

export default Categories;
