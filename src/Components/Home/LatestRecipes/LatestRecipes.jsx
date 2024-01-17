/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import RecipeCard from "../../Card/RecipeCard";
import { GrNext, GrPrevious } from "react-icons/gr";

const URL = "/public/recipes.json";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className=" cursor-pointer" onClick={onClick}>
      <GrNext />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className=" cursor-pointer" onClick={onClick}>
      <GrPrevious />
    </div>
  );
}
const LatestRecipes = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [recipes, setRecipes] = useState();
  useEffect(() => {
    axios.get(URL).then((res) => {
      setRecipes(res.data);
    });
  }, []);
  if (!recipes) {
    return <>Loading</>;
  }
  return (
    <div className="relative container mx-auto px-2">
      <div className="flex items-center justify-between">
        <h3 className="py-6 text-2xl font-medium">Latest Recipes</h3>
        <div className="flex gap-5 absolute right-0">
          <SamplePrevArrow
            className="slick-prev  z-10"
            onClick={() => sliderRef.current.slickPrev()}
          />
          <SampleNextArrow
            className="slick-next  z-10"
            onClick={() => sliderRef.current.slickNext()}
          />
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {recipes.map((recipe) => (
          <div className="px-2" key={recipe._id}>
            <RecipeCard key={recipe._id} recipe={recipe} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LatestRecipes;
