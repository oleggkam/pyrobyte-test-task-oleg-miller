import React from 'react';
import styles from './SubMenuMobile.module.css';

const SubMenuMobile = ({ isOpen, menuData }) => {
  const [subMenuData, setSubMenuData] = React.useState([]);
  React.useEffect(() => {
    setSubMenuData(menuData);
  }, [menuData]);
  return (
    <div>
      {isOpen === true && (
        <ul>
          {subMenuData.map((item, index) => {
            return (
              <li className={styles.item} key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SubMenuMobile;
