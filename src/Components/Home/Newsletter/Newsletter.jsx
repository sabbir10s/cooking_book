import { ButtonFill } from "../../Shared/Button/Button";

const Newsletter = () => {
  return (
    <div className="bg-secondary-200">
      <div className="container mx-auto py-20 flex flex-col items-center gap-3 lg:gap-6">
        <h2 className="text-xl lg:text-3xl font-semibold">
          Never Miss A Recipe!
        </h2>
        <p className="text-base lg:text-lg text-center">
          Sign up for free and be the first to get our best recipes delivered
          each week!
        </p>
        <input
          className="border p-2 md:p-3 w-fit sm:w-1/2 md:w-1/3"
          type="email"
          placeholder="Email Address"
        />
        <ButtonFill className="md:py-3 md:px-10 ">subscribe</ButtonFill>
      </div>
    </div>
  );
};

export default Newsletter;
