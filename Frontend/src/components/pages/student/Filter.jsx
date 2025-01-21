import React from "react";
import Courses from "./Courses";

const FilterSection = () => {
  return (
    <div className="flex">
      {/* Filter Section - Full Height */}
      <div className="w-1/4 h-screen p-4 bg-gray-50 border-r border-gray-200">
        {/* Filter Heading */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Filters</h2>

        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Category</h3>
          <div className="space-y-2">
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2">Web Development</span>
            </label>
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2">Data Science</span>
            </label>
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2">Mobile Apps</span>
            </label>
          </div>
        </div>

        {/* Level Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Level</h3>
          <div className="space-y-2">
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <span className="ml-2">Beginner</span>
            </label>
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <span className="ml-2">Intermediate</span>
            </label>
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <span className="ml-2">Advanced</span>
            </label>
          </div>
        </div>

        {/* Language Filter */}
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-4">Language</h3>
          <div className="space-y-2">
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <span className="ml-2">English</span>
            </label>
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <span className="ml-2">Hindi</span>
            </label>
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <span className="ml-2">Spanish</span>
            </label>
          </div>
        </div>
      </div>

      {/* Placeholder for other content */}
      <div className="w-3/4 p-6">
        <h1 className="text-gray-600">All Courses</h1>
        <div className=" flex  flex-col gap-4 mt-4">
          <Courses />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
