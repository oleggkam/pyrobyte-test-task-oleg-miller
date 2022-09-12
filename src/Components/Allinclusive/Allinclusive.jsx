import React from 'react';
import styles from './Allinclusive.module.css';
import ReadMore from './ReadMore';
import AllInclusiveSlider from './AllInclusiveSlider/AllInclusiveSlider';

const Allinclusive = () => {
  const containerRef = React.useRef(null);
  const [currentWidth, setCurrentWidth] = React.useState(0);
  let observer = React.useRef(
    new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      setCurrentWidth(width);
    }),
  );
  React.useEffect(() => {
    if (containerRef.current) {
      observer.current.observe(containerRef.current);
    }
    return () => {
      observer.current.unobserve(containerRef.current);
    };
  }, [containerRef, observer]);

  return (
    <section ref={containerRef} className={styles.container}>
      <AllInclusiveSlider currentWidth={currentWidth}>
        <div className={styles.wrapper}>
          <div className={styles.first}>
            <img
              className={styles.first_img}
              src={require('../../Assets/Img/Allinclusive/runner.png')}
              alt="runner"
            />
            <img
              className={styles.runner_360}
              src={require('../../Assets/Img/360/runner_360.png')}
              alt="runner_360"
            />
            <div className={styles.description}>
              <div className={styles.description_container}>
                Заниматесь в тренажерном зале и посещайте групповые тренировки
                <ReadMore />
              </div>
            </div>
          </div>
          <div className={styles.second}>
            <h3 className={styles.title}>Оздоровление</h3>
            <div className={styles.info}>
              Mriya Resort — это маленький город со множеством возможностей, каждый найдет себе
              занятие по вкусу
            </div>
            <img
              className={styles.second_img}
              src={require('../../Assets/Img/Allinclusive/food.png')}
              alt="food"
            />
            <img
              className={styles.food_360}
              src={require('../../Assets/Img/360/food_360.png')}
              alt="food_360"
            />
            <div className={styles.description}>
              <div className={styles.description_container}>
                Питаться в ресторане шведской линии согласно выбранному варианту
                <ReadMore />
              </div>
            </div>
          </div>
          <div className={styles.third}>
            <img
              className={styles.third_img}
              src={require('../../Assets/Img/Allinclusive/pool.png')}
              alt="pool"
            />
            <img
              className={styles.pool_360}
              src={require('../../Assets/Img/360/pool_360.png')}
              alt="pool_360"
            />
            <div className={styles.description}>
              <div className={styles.description_container}>
                Исследовать все общедоступные зоны и территории комплекса
                <ReadMore />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.first}>
            <img
              className={styles.first_img}
              src={require('../../Assets/Img/Allinclusive/runner.png')}
              alt="runner"
            />
            <img
              className={styles.runner_360}
              src={require('../../Assets/Img/360/runner_360.png')}
              alt="runner_360"
            />
            <div className={styles.description}>
              <div className={styles.description_container}>
                Заниматесь в тренажерном зале и посещайте групповые тренировки
                <ReadMore />
              </div>
            </div>
          </div>
          <div className={styles.second}>
            <h3 className={styles.title}>Оздоровление</h3>
            <div className={styles.info}>
              Mriya Resort — это маленький город со множеством возможностей, каждый найдет себе
              занятие по вкусу
            </div>
            <img
              className={styles.second_img}
              src={require('../../Assets/Img/Allinclusive/food.png')}
              alt="food"
            />
            <img
              className={styles.food_360}
              src={require('../../Assets/Img/360/food_360.png')}
              alt="food_360"
            />
            <div className={styles.description}>
              <div className={styles.description_container}>
                Питаться в ресторане шведской линии согласно выбранному варианту
                <ReadMore />
              </div>
            </div>
          </div>
          <div className={styles.third}>
            <img
              className={styles.third_img}
              src={require('../../Assets/Img/Allinclusive/pool.png')}
              alt="pool"
            />
            <img
              className={styles.pool_360}
              src={require('../../Assets/Img/360/pool_360.png')}
              alt="pool_360"
            />
            <div className={styles.description}>
              <div className={styles.description_container}>
                Исследовать все общедоступные зоны и территории комплекса
                <ReadMore />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.first}>
            <img
              className={styles.first_img}
              src={require('../../Assets/Img/Allinclusive/runner.png')}
              alt="runner"
            />
            <img
              className={styles.runner_360}
              src={require('../../Assets/Img/360/runner_360.png')}
              alt="runner_360"
            />
            <div className={styles.description}>
              <div className={styles.description_container}>
                Заниматесь в тренажерном зале и посещайте групповые тренировки
                <ReadMore />
              </div>
            </div>
          </div>
          <div className={styles.second}>
            <h3 className={styles.title}>Оздоровление</h3>
            <div className={styles.info}>
              Mriya Resort — это маленький город со множеством возможностей, каждый найдет себе
              занятие по вкусу
            </div>
            <img
              className={styles.second_img}
              src={require('../../Assets/Img/Allinclusive/food.png')}
              alt="food"
            />
            <img
              className={styles.food_360}
              src={require('../../Assets/Img/360/food_360.png')}
              alt="food_360"
            />
            <div className={styles.description}>
              <div className={styles.description_container}>
                Питаться в ресторане шведской линии согласно выбранному варианту
                <ReadMore />
              </div>
            </div>
          </div>
          <div className={styles.third}>
            <img
              className={styles.third_img}
              src={require('../../Assets/Img/Allinclusive/pool.png')}
              alt="pool"
            />
            <img
              className={styles.pool_360}
              src={require('../../Assets/Img/360/pool_360.png')}
              alt="pool_360"
            />
            <div className={styles.description}>
              <div className={styles.description_container}>
                Исследовать все общедоступные зоны и территории комплекса
                <ReadMore />
              </div>
            </div>
          </div>
        </div>
      </AllInclusiveSlider>
    </section>
  );
};

export default Allinclusive;
