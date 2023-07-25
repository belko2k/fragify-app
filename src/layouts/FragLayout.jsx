import { Outlet } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import Banner from '../components/Banner';

const FragLayout = () => {
  return (
    <div className="frag-layout">
      <Breadcrumbs />
      <Banner />
      <Outlet />
    </div>
  );
};

export default FragLayout;
