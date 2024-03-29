/* eslint-disable react/prop-types */

const Input = ({
  label,
  type,
  name,
  placeholder,
  required,
  onChange,
  defaultValue,
  className,
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor="input"
          className="block text-sm font-medium leading-6 text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <input
          defaultValue={defaultValue}
          type={type}
          name={name}
          id="input"
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          className={`block w-full rounded-md border-[1px] border-gray-100 p-3 bg-[#f4f5f7] focus:bg-white placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none duration-300 ${className}`}
        />
      </div>
    </div>
  );
};

export default Input;
