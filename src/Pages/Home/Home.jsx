import Hero from "../../Components/Hero/Hero";
import Categories from "../../Components/Home/Categories/Categories";
import LatestRecipes from "../../Components/Home/LatestRecipes/LatestRecipes";
import PopularRecipes from "../../Components/Home/PopularRecipes/PopularRecipes";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <LatestRecipes />
      <PopularRecipes />
    </div>
  );
};

export default Home;
