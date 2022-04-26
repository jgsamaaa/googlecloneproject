import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Results from './Results';
import Home from './Home';

export default function Router() {
  return (
    <div className="p-4">
      <Routes>
        {/* NOTE: MAYBE NEED LATER 'NOT DELETING FOR NOW' */}
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/search" element={<Results />}></Route>
        <Route exact path="/image" element={<Results />}></Route>
        <Route exact path="/news" element={<Results />}></Route>
        <Route exact path="/video" element={<Results />}></Route>
      </Routes>
    </div>
  );
}
