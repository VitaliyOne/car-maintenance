import RoutesConfig from './RoutesConfig';
import NavMenu from './NavMenu';
import Footer from './Footer';
import Header from './Header';

const CarMaintenanceMenu = () => {
  return (
    <>
      <Header />
      <main className="carMaintenanceMenu">
        <NavMenu />
        <RoutesConfig />
      </main>
      <Footer />
    </>
  );
};

export default CarMaintenanceMenu;
