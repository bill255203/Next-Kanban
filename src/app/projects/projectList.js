"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"; // Import the Link component
import ProjectCard from "../components/projectCard";

const ProjectList = () => {
  const projects = [
    {
      id: 1, // Add an id or use the index as id
      name: "project 1",
      content: "project 1 content goes here.",
      explanation: "project 1 explanation goes here.",
    },
    {
      id: 2, // Add an id or use the index as id
      name: "project 2",
      content: "project 2 content goes here.",
      explanation: "project 2 explanation goes here. i am so smart",
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <div className="cards flex flex-row">
        {/* Wrap ProjectCard inside the Link component */}
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="card w-[200px] h-[200px] bg-gray-300 m-[20px] p-[20px] "
            project={project}
          >
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
