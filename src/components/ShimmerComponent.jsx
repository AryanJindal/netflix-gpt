import React from 'react';
import './ShimmerComponent.css'; // Import the CSS file for styling

const ShimmerComponent = () => {
  return (
    <div className='relative w-48 h-64 p-4 m-2 group overflow-y-hidden bg-gray-800 text-white'>
      <div className='shimmer'></div>
    </div>
  );
};

export default ShimmerComponent;
