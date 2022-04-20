import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import LoginRegister from './components/login-register/LoginRegister';
import BoxProduct from './components/products/BoxProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BoxProduct />} />
        <Route path="/sign" element={<LoginRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
