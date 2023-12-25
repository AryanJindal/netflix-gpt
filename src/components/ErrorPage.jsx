import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Oops! Something went wrong.</h1>
        <p className="text-lg mb-8">We apologize for the inconvenience. Please try again later.</p>
        <img src="path/to/error-image.png" alt="Error" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default ErrorPage;
