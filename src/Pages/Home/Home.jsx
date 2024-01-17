import Hero from "../../Components/Hero/Hero";
import Categories from "../../Components/Home/Categories/Categories";
import LatestRecipes from "../../Components/Home/LatestRecipes/LatestRecipes";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <LatestRecipes />
    </div>
  );
};

export default Home;
