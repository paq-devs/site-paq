'use client'

import { useEffect, useState, useRef } from 'react';
import './Test.css';
import {depoimentos} from './depoimentos.json'
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";


export default function Teste() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  const handleLeftClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleRightClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth
  };

  return (
    <div className="container">
      <div className="logo">
        <img src="./images/contact-bg.jpg" alt="Super Shoes Logo" /> 
      </div>
      <div className="carousel" ref={carousel}>
        {depoimentos.map((item) => {
          const { id, name, pathFoto, text, role } = item;
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={pathFoto} alt={name} />
              </div>
              <div className="info">
                <span className="name">{name}</span>
                <span className="oldPrice">U$ {text}</span>
                <span className="price">U$ {role}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button 
        onClick={handleLeftClick}
        >
          <FiArrowLeft />
        </button>
        <button 
        onClick={handleRightClick}
        >
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
}

