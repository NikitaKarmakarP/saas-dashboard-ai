import React from 'react';
import Dashboard from '../components/Dashboard';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Home = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1">
      <Navbar />
      <Dashboard />
    </div>
  </div>
);

export default Home;
