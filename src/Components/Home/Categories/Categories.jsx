import axios from "axios";
import { useEffect, useState } from "react";
const URL = "/public/categories.json";
const Categories = () => {
  const [categories, setCategories] = useState();
  useEffect(() => {
    axios.get(URL).then((res) => {
      setCategories(res.data);
    });
  }, []);
  if (!categories) {
    return <>Loading</>;
  }
  return (
    <div className=" bg-primary-200 py-10">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 container mx-auto p-4">
        {categories.slice(0, 6).map(({ _id, category, image }) => {
          return (
            <div className="m-2 flex flex-col items-center" key={_id}>
              <div className="group bg-white w-24 md:w-36 h-24 md:h-36 rounded-full flex items-center justify-center">
                <img
                  className="w-[80px] md:w-[110px] group-hover:scale-110 duration-300"
                  src={image}
                  alt=""
                />
              </div>

              <p className=" font-semibold mt-2">{category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
