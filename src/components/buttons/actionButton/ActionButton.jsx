import React from "react";

const ActionButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="text-xl font-semibold hover:bg-blue-800 bg-blue-600 py-3 px-6 rounded-3xl text-center text-slate-100"
    >
      {children}
    </button>
  );
};

export default ActionButton;
