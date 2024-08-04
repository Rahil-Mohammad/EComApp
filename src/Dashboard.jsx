import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('jwtToken'); 
    navigate('/login'); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">Welcome to the Dashboard!</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

