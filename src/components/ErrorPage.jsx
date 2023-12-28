import React from 'react';
import { useRouteError } from 'react-router-dom';
const ErrorPage = () => {
  const error = useRouteError();
  // console.log(error.error.message)
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <p className='text-lg mb-8'>{error.error.message}</p>
        <img className="rounded-xl"alt="error" src="https://cdn.dribbble.com/users/1078347/screenshots/2799566/media/8a4ae0833c5e06c34e48b87c7583dc2d.png?resize=800x600&vertical=center"/>
        <h1 className="text-6xl font-bold mb-4">Oops! Something went wrong.</h1>
        <p className="text-lg mb-8">We apologize for the inconvenience. Please try again later.</p>

      </div>
    </div>
  );
};

export default ErrorPage;
