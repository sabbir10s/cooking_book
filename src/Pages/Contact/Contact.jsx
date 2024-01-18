import { ButtonFill } from "../../Components/Shared/Button/Button";
import Input from "../../Components/Shared/Input/Input";

const Contact = () => {
  return (
    <div>
      <div className="bg-pageTitle h-52 flex justify-center items-end">
        <h1 className="text-3xl md:text-5xl text-white container mx-auto px-2 text-center pb-14">
          Contact Us
        </h1>
      </div>
      <div className=" container mx-auto px-2 pt-10">
        <h3 className="text-secondary text-2xl md:text-4xl font-semibold pb-3">
          Contact Information
        </h3>
        <p className="text-sm md:text-base text-gray-500 pb-6">
          We&apos;re thrilled that you want to get in touch with us. Whether you
          have a question, a suggestion, or just want to say hello, we&apos;d
          love to hear from you. Our team is passionate about all things food,
          from delicious recipes to culinary adventures, and we&apos;re here to
          create a community of food enthusiasts. Feel free to reach out using
          the contact form below, and we&apos;ll do our best to respond as soon
          as possible. Thank you for being a part of our foodie family, and we
          look forward to connecting with you!
        </p>
        <h3 className="text-secondary text-2xl md:text-4xl font-semibold pb-6">
          Drop A Message
        </h3>
        <form className="space-y-6" action="">
          <div className="grid sm:grid-cols-2 gap-6 w-full">
            <Input label="Your Name" placeholder="Your Name" type="text" />
            <Input label="Your Email" placeholder="Your Email" type="email" />
          </div>
          <label
            className="block text-sm font-medium leading-6 text-gray-700"
            htmlFor="Message"
          >
            Message
          </label>
          <textarea
            className="block w-full rounded-md border-[1px] border-gray-100 p-3 bg-[#f4f5f7] focus:bg-white placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none duration-300"
            name="Message"
            id="Message"
            cols="30"
            rows="4"
          ></textarea>
          <ButtonFill className="px-10">Submit</ButtonFill>
        </form>
      </div>
    </div>
  );
};

export default Contact;
