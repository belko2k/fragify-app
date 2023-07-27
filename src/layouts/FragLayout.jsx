import { Outlet } from 'react-router-dom';

const FragLayout = () => {
  return (
    <div className="frag-layout">
      <Outlet />
    </div>
  );
};

export default FragLayout;
