import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router';
import Home from './pages/Home';
import RichtextPage from './pages/RichtextPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/react">Home</Link>
            </li>
            <li>
              <Link to="/react/test-richtext">Richtext</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="react" element={<Home />} />
          <Route path="react/test-richtext" element={<RichtextPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
