import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '@/views/pages/MainPage';
import SubPage from '@/views/pages/SubPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sub" element={<SubPage />} />
      </Routes>
    </Router>
  );
};

export default App;
