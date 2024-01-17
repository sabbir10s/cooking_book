import axios from "axios";
import { useEffect, useState } from "react";
import RecipeCard from "../../Card/RecipeCard";
const URL = "/public/recipes.json";
const LatestRecipes = () => {
  const [recipes, setRecipes] = useState();
  useEffect(() => {
    axios.get(URL).then((res) => {
      setRecipes(res.data);
    });
  }, []);
  if (!recipes) {
    return <>Loading</>;
  }
  console.log(recipes);
  return (
    <div className="container mx-auto mt-14">
      <h3 className="text-2xl">Latest Recipes</h3>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default LatestRecipes;
