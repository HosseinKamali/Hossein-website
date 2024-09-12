import React from 'react';
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import "./buttonGroup.css"
const ButtonGroup = ({ next, previous }) => {
  return (
    <div className="carousel-button-group">
      <button onClick={previous} className="custom-left-arrow" style={buttonStyleNext}>
        <HiOutlineArrowSmallLeft/>
      </button>
      <button onClick={next} className="custom-right-arrow hover:bg-slate-500" style={buttonStylePrev}>
         <HiOutlineArrowSmallRight/>
      </button>
    </div>
  );
};

const buttonStyleNext = {
  position: 'absolute',
  top: '-15%',
  right:"5%",
  marginLeft:'10px',
  zIndex: 2,
  background: 'transparent',
  border: '1px solid #b1b1b1',
  cursor: 'pointer',
  fontSize: '2rem',
  color: '#b1b1b1',
  backgroundColor: "white",
    padding: '5px',
    borderRadius: '100%'
};
const buttonStylePrev = {
    position: 'absolute',
    top: '-15%',
    right:"0",
    zIndex: 2,
    background: 'transparent',
    border: '1px solid #b1b1b1',
    cursor: 'pointer',
    fontSize: '2rem',
    color: '#b1b1b1',
    backgroundColor: "white",
    padding: '5px',
    borderRadius: '100%'
    
  };

export default ButtonGroup;
