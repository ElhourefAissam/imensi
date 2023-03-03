import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="flex items-center -mt-4">
      <Link to="/" className="px-3 ">
        <img
          style={{ maxHeight: "70px" }}
          className="block h-8 w-auto"
          src="./images/logo.svg"
          alt="Workflow"
        />
      </Link>
    </div>
  );
}
