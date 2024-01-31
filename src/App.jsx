// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowsList from './ShowsList';
import ShowDetails from './ShowDetails';
// import BookMovie from './BookMovie';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowsList />} />
        <Route path="/show/:id" element={<ShowDetails />} />
        {/* <Route path="/bookmovie" element={<BookMovie />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
