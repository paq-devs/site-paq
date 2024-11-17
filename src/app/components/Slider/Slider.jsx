"use client";
import React, { useEffect } from "react";
import styles from "./Slider.module.css";

const Slider = ({ intervalo, movimento, children }) => {
  const smoothScroll = (width) => {
    const scrollContainer = document.querySelector(`.${styles.container}`);
    scrollContainer.scrollLeft += width;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
    const shouldReset = scrollLeft >= scrollWidth - clientWidth;
    if (shouldReset) {
      scrollContainer.scrollLeft = 0;
    }
  };

  useEffect(() => {
    setInterval(() => {
      smoothScroll(movimento);
    }, intervalo);
    return () => clearInterval();
  });

  return <div className={styles.container}>{children}</div>;
};

export default Slider;
