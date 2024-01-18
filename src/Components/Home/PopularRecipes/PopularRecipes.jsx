import axios from "axios";
import { useEffect, useState } from "react";
const URL = "/public/recipes.json";
import { FiClock } from "react-icons/fi";

const PopularRecipes = () => {
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
    <div className="container mx-auto px-2">
      <h3 className="py-6 text-2xl font-medium">Most Popular Recipes</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {recipes.slice(0, 3).map(({ _id, image, title, description }, idx) => (
          <div
            key={_id}
            className={`border rounded relative flex flex-col justify-between  ${
              idx === 0 ? `sm:col-span-2 h-full row-span-2` : "col-span-1"
            }`}
          >
            <div className="absolute right-0 flex items-center justify-center gap-1 bg-primary-400 w-[80px] rounded-tr">
              <FiClock />
              <span> 30 min</span>
            </div>
            <div
              className={`text-sm text-gray-500  ${
                idx === 0 ? `w-full h-full` : "w-full h-[200px] overflow-hidden"
              }`}
            >
              <img
                className="rounded-t w-full object-fill "
                src={image}
                alt=""
              />
            </div>
            <div className="p-4">
              <h4 className="text-2xl text-secondary font-semibold group-hover:underline duration-300">
                {title}
              </h4>
              <p
                className={`text-sm text-gray-500  ${
                  idx === 0 ? `block` : "hidden"
                }`}
              >
                {description.slice(0, 200)}...
              </p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <div className="h-12 flex items-center justify-center gap-1 border-t border-r">
                <div>
                  <img
                    className="border h-8 w-8 rounded-full"
                    src="https://randomuser.me/api/portraits/men/85.jpg"
                    alt=""
                  />
                </div>
                <p className="text-gray-500 text-sm">
                  By{" "}
                  <span className="font-semibold text-secondary">
                    Sabbir Ahmed
                  </span>
                </p>
              </div>
              <div className="h-12 border-t flex items-center justify-center">
                <p className=" text-sm">24 Oct 2023</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRecipes;
