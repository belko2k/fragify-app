import { Outlet } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

const FragLayout = () => {
  return (
    <div className="frag-layout">
      <Breadcrumbs />
      <Outlet />
    </div>
  );
};

export default FragLayout;
