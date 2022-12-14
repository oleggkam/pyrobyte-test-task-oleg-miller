import React from 'react';
import styles from './SubMenuItem.module.css';

const SubMenuItem = ({ index }) => {
  const subMenuData = [
    {
      title_1: 'Размещение размещение размещение',
      title_2: 'Размещение размещение',
      description:
        'Размещение размещение Размещение размещение Размещение размещение Размещение размещение Размещение размещение',
    },
    {
      title_1: `Клиника персонализированной медицины`,
      title_2: `Медицинский центр`,
      description: `Международные стандарты лечения и современные методики в сочетании с высококлассным сервисом
        и проживанием в одном из лучших семейных курортов мира Mriya Resort & SPA 5*`,
    },
    {
      title_1: 'Мероприятия Мероприятия Мероприятия',
      title_2: 'Мероприятия Мероприятия',
      description:
        'Мероприятия Мероприятия Мероприятия Мероприятия Мероприятия Мероприятия Мероприятия Мероприятия Мероприятия Мероприятия',
    },
    {
      title_1: 'Красота и восстановление Красота и восстановление Красота и восстановление',
      title_2: 'Красота и восстановление Красота и восстановление',
      description:
        'Красота и восстановление Красота и восстановление Красота и восстановление Красота и восстановление Красота и восстановление Красота и восстановление Красота и восстановление Красота и восстановление Красота и восстановление Красота и восстановление',
    },
    {
      title_1: 'Бары и рестораны Бары и рестораны Бары и рестораны',
      title_2: 'Бары и рестораны Бары и рестораны',
      description:
        'Бары и рестораны Бары и рестораны Бары и рестораны Бары и рестораны Бары и рестораны Бары и рестораны Бары и рестораны Бары и рестораны Бары и рестораны Бары и рестораны',
    },
    {
      title_1: 'Развлечения Развлечения Развлечения',
      title_2: 'Развлечения Развлечения',
      description:
        'Развлечения Развлечения Развлечения Развлечения Развлечения Развлечения Развлечения Развлечения Развлечения Развлечения',
    },
    {
      title_1: 'Спорт Спорт Спорт',
      title_2: 'Спорт Спорт',
      description: 'Спорт Спорт Спорт Спорт Спорт Спорт Спорт Спорт Спорт Спорт',
    },
    {
      title_1: 'Детям Детям Детям',
      title_2: 'Детям Детям',
      description: 'Детям Детям Детям Детям Детям Детям Детям Детям Детям Детям',
    },
    {
      title_1: 'Транспорт Транспорт Транспорт',
      title_2: 'Транспорт Транспорт',
      description:
        'Транспорт Транспорт Транспорт Транспорт Транспорт Транспорт Транспорт Транспорт Транспорт Транспорт',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>{subMenuData[index].title_1}</div>
      <div className={styles.title}>{subMenuData[index].title_2}</div>
      <div className={styles.description}>{subMenuData[index].description}</div>
    </div>
  );
};

export default SubMenuItem;
