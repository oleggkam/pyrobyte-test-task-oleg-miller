import styles from './App.module.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Choose from './Components/Choose/Choose';
import Categories from './Components/Categories/Categories';
import Info from './Components/Info/Info';
import Allinclusive from './Components/Allinclusive/Allinclusive';
const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Choose />
      <Categories />
      <Info />
      <Allinclusive />
    </div>
  );
};

export default App;
