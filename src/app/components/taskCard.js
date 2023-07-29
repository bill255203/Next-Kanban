import React from "react";

const taskCard = ({ task }) => {
  return (
    <>
      <div className="task-name font-bold">{task.name}</div>
      <div
        className="task-content-container overflow-y-auto"
        style={{ maxHeight: "150px" }} // Adjust this value as needed
      >
        <div className="task-content">{task.content}</div>
        <div className="task-explanation">{task.explanation}</div>
      </div>
    </>
  );
};

export default taskCard;
