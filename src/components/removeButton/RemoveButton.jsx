import React from 'react';


const RemoveButton = ({ id,onClick }) => {
    
    

  return (
    <button
      className="bg-red-700 text-xl text-slate-50 font-semibold ml-5 rounded-2xl px-3 py-1"
      onClick={() => onClick(id)}
    >
      Remove
    </button>
  );
};

export default RemoveButton;
