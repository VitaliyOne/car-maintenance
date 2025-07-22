import './App.css';

import CarMaintenanceMenu from './components/CarMaintenanceMenu';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <CarMaintenanceMenu />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
