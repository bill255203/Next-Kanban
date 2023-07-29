"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook from Next.js
import AddProject from "./addProject";
const Sidebar = () => {
  const router = useRouter(); // Initialize the router object

  const handleAddProjectClick = () => {
    // This function will be called when the "Add" button is clicked
    router.push("/new"); // Navigate to the "/new" page
  };

  return (
    <div className="w-[250px] h-full">
      <AddProject />
    </div>
  );
};

export default Sidebar;
