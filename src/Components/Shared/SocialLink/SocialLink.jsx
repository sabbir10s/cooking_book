import image1 from "../../../Assets/Images/img1.webp";
import image2 from "../../../Assets/Images/img2.webp";
import image3 from "../../../Assets/Images/img3.webp";
import image4 from "../../../Assets/Images/img4.webp";
import image5 from "../../../Assets/Images/img5.jpg";
import image6 from "../../../Assets/Images/img6.jpg";
const SocialLink = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="grid grid-cols-3 md:grid-cols-6">
        <div className=" overflow-hidden">
          <img className="w-full h-full object-fill" src={image1} alt="" />
        </div>
        <div className=" overflow-hidden">
          <img className="w-full h-full object-fill" src={image2} alt="" />
        </div>
        <div className=" overflow-hidden">
          <img className="w-full h-full object-fill" src={image3} alt="" />
        </div>
        <div className=" overflow-hidden">
          <img className="w-full h-full object-fill" src={image4} alt="" />
        </div>
        <div className=" overflow-hidden">
          <img className="w-full h-full object-fill" src={image5} alt="" />
        </div>
        <div className=" overflow-hidden">
          <img className="w-full h-full object-fill" src={image6} alt="" />
        </div>
      </div>
      <div className="absolute border-2 border-primary-400">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="  text-3xl bg-white hover:bg-primary-400 duration-300 px-8 py-4 text-secondary m-2 inline-block "
        >
          Instagram
        </a>
      </div>
    </div>
  );
};

export default SocialLink;
