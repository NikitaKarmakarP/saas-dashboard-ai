import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BlogGenerator from './components/BlogGenerator';
import BlogHistory from './components/BlogHistory';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/generate"
          element={
            <div className="flex">
              <Sidebar />
              <div className="flex-1">
                <Navbar />
                <BlogGenerator />
              </div>
            </div>
          }
        />
        <Route
          path="/history"
          element={
            <div className="flex">
              <Sidebar />
              <div className="flex-1">
                <Navbar />
                <BlogHistory />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
