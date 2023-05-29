import React from "react";

const CustomInput = ({ heading, type, placeholder, value, handleChange }) => {
  return (
    <div className="mb-2 text-lg flex flex-col text-black ">
      <label className="text-sm font-medium text-gray-900 mb-2 " >
        <b>{heading}</b>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 "
        required
        onChange={(text) => handleChange(text)}
      />
    </div>
  );
};

export default CustomInput;
