import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import './styles/index.scss';

// import components
import Portfolio from './containers/Portfolio';
import LetterJ from './containers/LetterJ';
import LetterO from './containers/LetterO';
import LetterH from './containers/LetterH';
import LetterN from './containers/LetterN';
import Nav from './Components/Layout/Nav';
import Footer from './Components/Layout/Footer';
import ArtWorkDetails from './containers/LetterO/ArtWorkDetails';
import Error from './Components/Error';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Portfolio />}
            exact
          />
          <Route
            path="/j/history"
            element={<LetterJ />}
            exact
          />
          <Route
            path="/o/artWork"
            element={<LetterO />}
            exact
          />
          <Route
            path="/o/artWork/:slug"
            element={<ArtWorkDetails />}
            exact
          />
          <Route
            path="/h/contact"
            element={<LetterH />}
            exact
          />
          <Route
            path="/n/skills"
            element={<LetterN />}
            exact
          />
          <Route
            path="*"
            element={<Error />}
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
