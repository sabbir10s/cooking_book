import { IoIosLink } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import CustomCheckbox from "../../Components/Shared/CheckBox/CustomCheckbox";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const URL = "../../../public/recipes.json";
const RecipeDetails = () => {
  const { recipeId } = useParams();
  const [recipes, setRecipes] = useState();
  useEffect(() => {
    axios.get(URL).then((res) => {
      setRecipes(res.data);
    });
  }, []);

  if (!recipes) {
    return <>Loading</>;
  }
  const singleRecipe = recipes.find((recipe) => recipe._id === recipeId);
  const {
    title,
    image,
    preparationTime,
    cookTime,
    calories,
    ingredients,
    steps,
  } = singleRecipe;

  return (
    <div className="mt-32 container mx-auto px-2">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold text-secondary">{title}</h2>
        <div className="flex items-center justify-center gap-5">
          <a
            className="text-lg h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center"
            href="copy"
          >
            <IoIosLink />
          </a>
          <a
            className="text-lg h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center"
            href="facebook"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
      <img className="w-full mt-10" src={image} alt="" />

      <div className="space-y-10 my-6 p-2 sm:p-6 bg-secondary-100">
        <div className="flex items-center gap-2">
          <img
            className="border h-8 md:h-12 w-8 md:w-12 rounded-full"
            src="https://randomuser.me/api/portraits/men/85.jpg"
            alt=""
          />
          <div>
            <h5 className="text-secondary font-semibold">Sabbir Ahmed</h5>
            <p className="text-sm text-gray-500">November 7, 2022</p>
          </div>
        </div>

        <h5 className="text-xl font-semibold">Description</h5>
        <div>
          <div className="space-y-4">
            <h6 className="font-semibold">Cooking Time</h6>
            <div className="flex flex-col items-start md:flex-row md:items-center justify-between text-secondary-500">
              <p>
                Preparation Time:{" "}
                <span className="font-semibold text-secondary-700">
                  {preparationTime} Min
                </span>
              </p>
              <p>
                Cook Time:{" "}
                <span className="font-semibold text-secondary-700">
                  {cookTime} Min
                </span>
              </p>
              <p>
                Calories:{" "}
                <span className="font-semibold text-secondary-700">
                  {calories} kcal
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4 bg-primary-50 p-2 sm:p-4">
          <h5 className="text-xl font-semibold">Ingredients</h5>
          <div>
            {ingredients.map(({ name }, idx) => {
              return (
                <div key={idx}>
                  <CustomCheckbox label={name} />
                </div>
              );
            })}
          </div>
        </div>
        <div className=" space-y-4">
          <h5 className="text-xl font-semibold">Directions</h5>
          <div className=" space-y-6">
            {steps.map(({ description }, idx) => (
              <div key={idx} className="flex items-start gap-8">
                <span className="text-2xl font-bold">{idx + 1}</span>
                <p className="text-lg text-secondary-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
