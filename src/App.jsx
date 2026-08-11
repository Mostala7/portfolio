import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BentoGrid from './components/BentoGrid';
import MotorsArchiveCaseStudy from './pages/MotorsArchiveCaseStudy';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#fff', minHeight: '100vh', padding: '2rem 0' }}>
        <Routes>
          <Route path="/" element={<BentoGrid />} />
          <Route path="/case-study/motors-archive" element={<MotorsArchiveCaseStudy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
