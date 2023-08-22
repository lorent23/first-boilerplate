import React from 'react';
import FFFAnimation from '../Lottie-Animations/404Animation';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <FFFAnimation style={{ width: '200px', height: '200px', margin: '0 auto' }} />
        <h1 className="text-4xl font-bold">404 - Not Found</h1>
        <p className="text-lg">Sorry, the page you're looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
