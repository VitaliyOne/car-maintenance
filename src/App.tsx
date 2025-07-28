import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Login from './components/login/LoginForm';
import CarMaintenanceMenu from './components/CarMaintenanceMenu';

function App() {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID || ''}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<CarMaintenanceMenu />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;
