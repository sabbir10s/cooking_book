import { IoIosLink } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

const RecipeDetails = () => {
  return (
    <div className="mt-32 container mx-auto px-2">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold text-secondary">Fish Pickle</h2>
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
      <img
        className="w-full mt-10"
        src="https://gossip-themes.com/foodior/wp-content/uploads/2022/11/emy-EElApq8URZ8-unsplash-823x500.jpg"
        alt=""
      />
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
    </div>
  );
};

export default RecipeDetails;
