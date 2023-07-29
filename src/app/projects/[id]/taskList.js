"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"; // Import the Link component
import TaskCard from "../../components/taskCard";

const taskList = () => {
  const tasks = [
    {
      id: 1, // Add an id or use the index as id
      name: "task 1",
      content: "task 1 content goes here.",
      explanation: "task 1 explanation goes here.",
    },
    {
      id: 2, // Add an id or use the index as id
      name: "task 2",
      content: "task 2 content goes here.",
      explanation: "task 2 explanation goes here. i am so smart",
    },
    // Add more tasks as needed
  ];

  return (
    <div>
      <div className="cards flex flex-row">
        {/* Wrap taskCard inside the Link component */}
        {tasks.map((task) => (
          <Link
            key={task.id}
            href={`/tasks/${task.id}`}
            className="card w-[200px] h-[200px] bg-gray-300 m-[20px] p-[20px] "
            task={task}
          >
            <TaskCard task={task} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default taskList;
