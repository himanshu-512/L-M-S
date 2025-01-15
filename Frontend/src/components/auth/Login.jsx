import axios from "axios";
import React, { useState } from "react";
import { toast } from "sonner";

const Login = () => {
const [formData, setformData] = useState({
  email : "",
  password : "",  
  role : ""
})
const handleChange = (e) => {
  const { name, value } = e.target;
  setformData({ ...formData, [name]: value });

}
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("http://localhost:8000/api/v1/user/login", formData);
    console.log("Response from backend:", response);
    if (response?.data?.message) {
      toast.success(response.data.message);
    } else {
      toast.error("Unexpected response format");
    }
  } catch (error) {
    console.error("Error during login:", error);

    // If the error has a response object (e.g., 4xx or 5xx errors)
    if (error.response) {
      toast.error(error.response.data?.message || "Login failed");
    } else {
      toast.error("Network error or server unreachable");
    }
  }
};


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
          Login
        </h2>
        <form onSubmit={handleSubmit} >
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Role Selection */}
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-600 mb-2">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled selected>
                Select your role
              </option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
