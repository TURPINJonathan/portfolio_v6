import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import './styles/index.scss';

// import components
import Portfolio from './Components/Portfolio';
import LetterJ from './containers/LetterJ';
import LetterO from './containers/LetterO';
import LetterH from './Components/LetterH';
import LetterN from './containers/LetterN';
import Nav from './Components/Layout/Nav';
import Footer from './Components/Layout/Footer';
import ArtWorkDetails from './Components/LetterO/ArtWorkDetails';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Portfolio />}
          />
          <Route
            path="/j/history"
            element={<LetterJ />}
          />
          <Route
            path="/o/artWork"
            element={<LetterO />}
          />
          <Route
            path="/o/artWork/test"
            element={<ArtWorkDetails />}
          />
          <Route
            path="/h/contact"
            element={<LetterH />}
          />
          <Route
            path="/n/skills"
            element={<LetterN />}
          />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
