import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Routing from './components/Routing';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <Router>
      <div className={darkTheme ? 'isdark' : ''}>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
          <Navbar />
          <Routes />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
