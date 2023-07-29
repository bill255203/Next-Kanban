import React from "react";
import AddTask from "../addTask";
import TaskList from "./taskList";

const page = ({ project }) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        {/* <h1>This is project {project.name}</h1>
        <h2>we will be doing {project.content}</h2> */}
        <AddTask />
      </div>
      <TaskList />
    </div>
  );
};

export default page;
