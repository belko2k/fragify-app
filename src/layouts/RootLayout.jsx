import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import styles from '../styles/RootLayout.module.css';

const RootLayout = () => {
  return (
    <div className={styles['root-layout']}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
