import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export default api;

// /frontend/src/hooks/useAuth.js
import { useState } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);
  return { user, login, logout };
};

// /frontend/src/components/Navbar.js
import React from 'react';

const Navbar = () => (
  <nav className="w-full h-16 bg-gray-800 flex items-center justify-between px-6 text-white">
    <h1 className="text-xl font-bold">AI Blog Dashboard</h1>
  </nav>
);

export default Navbar;
