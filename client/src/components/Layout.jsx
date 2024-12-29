import React from 'react';
import Navigation from './Navigation'; // Make sure this path is correct

/**
 * Layout Component
 * Wraps the content with a shared Navigation.
 */
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation */}
      <header>
        <Navigation />
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto p-4">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
