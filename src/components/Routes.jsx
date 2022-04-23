import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Results from './Results';
import Search from './Search';
export default function Router() {
  return (
    <div className="p-4">
      <Routes>
        {/* NOTE: MAYBE NEED LATER 'NOT DELETING FOR NOW' */}
        {/* <Route exact path="/" element={<Search />}></Route> */}
        <Route exact path="/search" element={<Results />}></Route>
        <Route exact path="/images" element={<Results />}></Route>
        <Route exact path="/news" element={<Results />}></Route>
        <Route exact path="/videos" element={<Results />}></Route>
      </Routes>
    </div>
  );
}
