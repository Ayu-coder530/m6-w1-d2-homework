import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './Navbar';
import Home from './Home';
import InventoryList from './InventoryList';
import InventoryEdit from './InventoryEdit';

const App = () => {
  return (
    <Router>
      <div>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<InventoryList />} />
          <Route path="/edit/:id" element={<InventoryEdit />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
