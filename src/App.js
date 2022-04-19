import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
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
