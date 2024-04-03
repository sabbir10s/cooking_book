import { useEffect, useState } from "react";
import HeroSlider from "../Home/Slider/HeroSlider";
import axios from "axios";
const Hero = () => {
  const URL = "/public/recipes.json";
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
    <div className="relative h-screen">
      <HeroSlider recipes={recipes} />
    </div>
  );
};

export default Hero;
