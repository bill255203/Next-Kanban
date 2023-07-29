import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="project-name font-bold">{project.name}</div>
      <div
        className="project-content-container overflow-y-auto"
        style={{ maxHeight: "150px" }} // Adjust this value as needed
      >
        <div className="project-content">{project.content}</div>
        <div className="project-explanation">{project.explanation}</div>
      </div>
    </>
  );
};

export default ProjectCard;
