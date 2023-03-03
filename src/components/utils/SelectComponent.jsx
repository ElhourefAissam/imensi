import React from "react";

export default function SelectComponent({
  data,
  label,
  value,
  name,
  id,
  className,
  onChange,
  addFunction,
}) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <label htmlFor="">{name}</label>
        {addFunction && <button onClick={addFunction}>Add new +</button>}
      </div>
      <select
        name={name}
        id={id}
        className={className}
        onChange={(e) => {
          onChange(e);
        }}
      >
        {data.map((item, index) => (
          <option key={index} value={item[value]}>
            {item[label]}
          </option>
        ))}
      </select>
    </div>
  );
}
