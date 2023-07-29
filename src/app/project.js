import React from "react";
import Card from "./card.js";

const Project = () => {
  const tasks = [
    {
      name: "Task 1",
      content: "Task 1 content goes here.",
      explanation: "Task 1 explanation goes here.",
    },
    {
      name: "Task 2",
      content: "Task 2 content goes here.",
      explanation: "Task 2 explanation goes here. i am so smart",
    },
    // Add more tasks as needed
  ];

  return (
    <div>
      <div className="cards flex flex-row">
        <Card tasks={tasks} />
      </div>
    </div>
  );
};

export default Project;
