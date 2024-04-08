/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FiClock } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { _id, image, title, description } = recipe;
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/recipe/${_id}`)}
      className="border rounded relative"
    >
      <div className="absolute right-5 top-5 flex items-center justify-center gap-1 bg-primary-400 w-[80px] rounded-tr">
        <FiClock />
        <span> 30 min</span>
      </div>
      <div className="w-full h-[300px] rounded-t overflow-hidden">
        <img
          className="rounded-t w-full h-full object-cover"
          src={image}
          alt=""
        />
      </div>
      <div className="p-4">
        <h4 className="text-2xl text-secondary font-semibold group-hover:underline duration-300">
          {title}
        </h4>
        <p className="text-sm text-gray-500">{description.slice(0, 80)}...</p>
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
            <span className="font-semibold text-secondary">Sabbir Ahmed</span>
          </p>
        </div>
        <div className="h-12 border-t flex items-center justify-center">
          <p className=" text-sm">24 Oct 2023</p>
        </div>
      </div>
    </button>
  );
};

export default RecipeCard;
