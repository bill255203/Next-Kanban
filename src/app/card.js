import React from "react";

const Card = ({ tasks }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <div
          key={index}
          className="card w-[200px] h-[150px] bg-gray-300 m-[20px] p-[20px] "
        >
          <div className="task-name font-bold">{task.name}</div>
          <div
            className="task-content-container overflow-y-auto"
            style={{ maxHeight: "100px" }} // Adjust this value as needed
          >
            <div className="task-content">{task.content}</div>
            <div className="task-explanation">{task.explanation}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
