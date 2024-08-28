import React from 'react';
import './Loader.css'; // Make sure to import the CSS file

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
