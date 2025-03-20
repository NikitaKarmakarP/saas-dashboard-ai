import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside className="w-60 bg-gray-900 min-h-screen p-4 text-white">
    <ul className="space-y-4">
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/generate">Generate Blog</Link></li>
      <li><Link to="/history">Blog History</Link></li>
    </ul>
  </aside>
);

export default Sidebar;
