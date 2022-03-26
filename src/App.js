import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Books from './pages/Books';
import Categories from './pages/Categories';

import './App.css';

const App = () => (
  // <Router basename="/react-bookstore">
  <Router>
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={<Books />}
        />
        <Route
          path="/Categories"
          element={<Categories />}
        />
      </Routes>
    </div>
  </Router>
);

export default App;
