import React from "react";
import SelectComponent from "../../components/utils/SelectComponent";
import FileDrop from "../../components/FileDrop";
import Input from "../../components/Text/Input";

export default function TrainingPage() {
  const categories = [
    { id: "safety", name: "Safety", icon: "fas fa-user" },
    { id: "health", name: "Health", icon: "fas fa-user" },
    { id: "environment", name: "Environment", icon: "fas fa-user" },
  ];
  const topics = [
    { id: "VCA", name: "VCA", icon: "fas fa-user" },
    { id: "VCA+", name: "VCA+", icon: "fas fa-user" },
    { id: "VCA++", name: "VCA++", icon: "fas fa-user" },
  ];
  const years = [
    { id: "1_year", name: "1 year" },
    { id: "2_year", name: "2 year" },
    { id: "3_year", name: "3 year" },
  ];
  const workers_type = [
    { id: "internal_workers", name: "Internal Workers" },
    { id: "external_workers", name: "External Workers" },
    { id: "all_workers", name: "All Workers" },
  ];

  return (
    <div className="">
      <span className=" text-gray-400">Edit Training “Working At Height”</span>
      <div className=" grid gap-4 mt-5">
        {/* Information section */}
        <div className="col-span-6 bg-white rounded-md p-5 border border-gray-200">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 justify-between">
            <SelectComponent
              data={categories}
              label="name"
              value="id"
              name="Category"
              id="category"
              className="border border-gray-200 rounded-md p-2 w-full"
              onChange={(e) => {
                console.log(e.target.value);
              }}
              addFunction={() => {
                console.log("add new");
              }}
            />
            <SelectComponent
              data={topics}
              label="name"
              value="id"
              name="Topic"
              id="topic"
              className="border border-gray-200 rounded-md p-2 w-full"
              onChange={(e) => {
                console.log(e.target.value);
              }}
              addFunction={() => {
                console.log("add new");
              }}
            />
            <SelectComponent
              data={years}
              label="name"
              value="id"
              name="Valid For"
              id="year"
              className="border border-gray-200 rounded-md p-2 w-full"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <Input label="Training" type="text" />
            <SelectComponent
              data={workers_type}
              label="Assign to"
              value="id"
              name="Valid For"
              id="year"
              className="border border-gray-200 rounded-md p-2 w-full"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </div>
        </div>

        {/* Image section */}
        <div className="col-span-4 bg-white rounded-md p-5 border border-gray-200 w-14">
          <FileDrop
            type={["image/jpeg", "image/png"]}
            title="Image"
            text="Drag and drop your Image here"
            textBottom="Only JPG, PNG files are allowed, Image must be at less than 2MB"
            imgSize="70"
            onFileSelect={(item) => {
              console.log(item);
            }}
          />
        </div>

        {/* training file section */}
        <div className="col-span-2 bg-white rounded-md p-5 border border-gray-200">
          <FileDrop
            type={["application/pdf", "application/msword"]}
            title="Training File"
            text="Drag and drop your file here"
            textBottom="Only JPG, PNG files are allowed, Image must be at less than 2MB"
            imgSize="70"
            onFileSelect={(item) => {
              console.log(item);
            }}
          />
          <div className="divide-x h-2"></div>
        </div>

        {/* training quiz section */}
        <div className="col-span-12 bg-white rounded-md p-5 border border-gray-200">
          forth
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4 mt-4">
        <div className="bg-white rounded-md p-5 border border-gray-200 col-span-1">
          1
        </div>
        <div className="bg-white rounded-md p-5 border border-gray-200 col-span-1">
          2
        </div>
        <div className="bg-white rounded-md p-5 border border-gray-200 col-span-1">
          3
        </div>
        <div className="bg-white rounded-md p-5 border border-gray-200 col-span-1">
          4
        </div>
        <div className="bg-white rounded-md p-5 border border-gray-200 col-span-1">
          5
        </div>
        <div className="bg-white rounded-md p-5 border border-gray-200 col-span-1">
          6
        </div>
      </div>
    </div>
  );
}
