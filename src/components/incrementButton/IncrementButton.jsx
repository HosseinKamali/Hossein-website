import React from 'react';


const IncrementButton = ({ id ,onClick}) => {
    
  return (
    <button
      className="bg-blue-600 py-2 ml-3 rounded-2xl px-4 text-slate-50"
      onClick={() => onClick(id)}
    >
      +
    </button>
  );
};

export default IncrementButton;
