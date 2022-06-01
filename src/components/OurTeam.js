import React from "react";
import NavLink from "./NavLink";
import { useState, useRef, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const featuredProducts = [
  "/images/hero_11.jpg",
  "/images/hero_12.jpg",
  "/images/hero_13.jpg",
  "/images/hero_14.jpg",
  "/images/hero_15.jpg",
  "/images/hero_16.jpg",
];
let count = 0;
let slideInterval;

export default function OurTeam() {
  const [current, setCurrent] = useState(false);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);
  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrent(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (current + productsLength - 1) % productsLength;
    setCurrent(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div>
      <NavLink />
      <div className="slider-container">
        <section ref={slideRef} className="slider">
          <div>
            <img
              src={featuredProducts[current]}
              alt="travel"
              className="image"
            />
          </div>
          <FaArrowAltCircleLeft
            className="left-arrow"
            onClick={handleOnPrevClick}
          />
          <FaArrowAltCircleRight
            className="right-arrow"
            onClick={handleOnNextClick}
          />
        </section>
      </div>
    </div>
  );
}
