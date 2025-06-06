import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Navbar from './components/navbar/Navbar';
import Forecast from './pages/Forecast';
import Login from './components/login/Login';
import Settings from './pages/Settings';
import Automations from './pages/Automations';
import Reports from './pages/Reports';
import Supply from './pages/Supply';
import Sustainability from './pages/Sustainability';

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login'];

  if (hideNavbarRoutes.includes(location.pathname)) {
    // Show only the login page, without Navbar
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    );
  }

  // Show Navbar and all other routes inside the Navbar's main content area
  return (
    <Navbar content={
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/automations" element={<Automations />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/supply" element={<Supply />} />
        <Route path="/sustainability" element={<Sustainability />} />
      </Routes>
    } />
  );
}

export default App;
