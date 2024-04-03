/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Slider.css";
import { Link } from "react-router-dom";

const HeroSlider = ({ recipes }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % recipes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + recipes.length) % recipes.length);
  };

  const startAutoplay = () => {
    return setInterval(() => {
      nextSlide();
    }, 5000);
  };

  useEffect(() => {
    const intervalId = startAutoplay();

    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-gray-800/70 absolute h-screen w-full z-10"></div>
      <img
        src={recipes[currentSlide].image}
        alt={recipes[currentSlide].title}
        className="w-full h-full object-cover absolute z-0"
      />
      <div className="relative z-20 overflow-hidden bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100 h-56 w-[400px] flex items-center justify-center">
        <div className="w-full">
          <TransitionGroup
            component="div"
            className="flex transition-transform duration-300 ease-in-out h-full"
          >
            <CSSTransition key={currentSlide} timeout={300} classNames="fade">
              <div className="w-full flex-shrink-0 relative">
                <div className="absolute inset-0 flex flex-col items-start justify-center text-white bg-white/80 md:bg-transparent">
                  <div className="w-full md:max-w-[450px] p-4">
                    <h1 className="text-xl md:text-3xl font-bold mb-2 text-primary-600 headline">
                      {recipes[currentSlide].title}
                    </h1>
                    <p className="text-base md:text-lg mb-4 text-white details">
                      {recipes[currentSlide].description.slice(0, 70)}
                    </p>
                    <Link
                      to={recipes[currentSlide].title}
                      className="text-white px-10 py-2.5 hover:bg-primary-700 transition duration-300 text-sm sm:text-base bg-primary-600 button"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
      <div className="absolute z-20 bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button
          onClick={prevSlide}
          className="bg-transparent text-gray-400 hover:text-primary-600 transition duration-300"
        >
          <IoIosArrowBack size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="bg-transparent text-gray-400 hover:text-primary-600 transition duration-300"
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
