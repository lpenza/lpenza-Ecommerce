import NavBar from '../NavBar';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useLayout } from './useLayout';

// const links = ["Men", "Women", "Kids"];

export const UserLayout = () => {
  const {linksNav}=useLayout()
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <NavBar categories={linksNav} />
      <Outlet />
      <Footer />
    </div>
  );
};
