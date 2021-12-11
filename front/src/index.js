import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/index.scss';

// import components
import Portfolio from './Components/Portfolio';
import LetterJ from './Components/LetterJ';
import LetterO from './Components/LetterO';
import LetterH from './Components/LetterH';
import LetterN from './Components/LetterN';
import Nav from './Components/Layout/Nav';
import Footer from './Components/Layout/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Portfolio />}
        />
        <Route
          path="/turpin-jonathan"
          element={<LetterJ />}
        />
        <Route
          path="/turpin-jonathan/o"
          element={<LetterO />}
        />
        <Route
          path="/turpin-jonathan/h"
          element={<LetterH />}
        />
        <Route
          path="/turpin-jonathan/n"
          element={<LetterN />}
        />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
