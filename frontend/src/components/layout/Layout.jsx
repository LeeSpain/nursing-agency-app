import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
      <footer className="bg-indigo-900 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Nurse-Sync. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;