import React from "react";
import { Link } from "react-router-dom";

export default function links() {
  return (
    <div className="lg:w-80">
      <div className="flex justify-start space-x-8 mt-4">
        <Link
          to="/dashboard"
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium"
        >
          Dashboard
        </Link>
        <Link
          to="/trainings"
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium"
        >
          Trainings
        </Link>
        <Link
          to="/users"
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium"
        >
          users
        </Link>
        <Link
          to="/"
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium"
        >
          more
        </Link>
      </div>
    </div>
  );
}
