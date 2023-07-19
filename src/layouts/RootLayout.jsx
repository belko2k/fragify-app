import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import styles from '../styles/RootLayout.module.css';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div className={styles['root-layout']}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
