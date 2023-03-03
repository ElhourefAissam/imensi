import React from "react";

export default function Input({ label, type, value, callback }) {
  return (
    <div className="flex flex-col">
      <label htmlFor="file-input" className="">
        {label}
      </label>
      <input
        id={`input-${label}`}
        type={type}
        className="bg=white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
        value={value}
        onChange={(e) => {
          callback(e.target.value);
        }}
      />
    </div>
  );
}
