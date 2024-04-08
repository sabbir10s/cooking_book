/* eslint-disable react/prop-types */
import "./CustomCheckbox.css";
const CustomCheckbox = ({ label }) => {
  return (
    <label className="boxContainer flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        className="checkbox form-checkbox h-5 w-5 text-primary-600"
      />
      <span className="checkmark"></span>
      <span className="text-gray-700 label">{label}</span>
    </label>
  );
};

export default CustomCheckbox;
