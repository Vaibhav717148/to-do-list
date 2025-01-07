"use client";
import React, { useState } from "react";

const Page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    const updatedTasks = mainTask.filter((_, index) => index !== i);
    setMainTask(updatedTasks);
  };

  return (
    <>
      <h1 className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-extrabold py-5 text-xl sm:text-5xl text-center shadow-lg">
        To Do List
      </h1>
      <form
        onSubmit={submitHandler}
        className="flex flex-col items-center bg-gray-100 py-6 px-4"
      >
        <input
          type="text"
          className="text-lg border-gray-300 border-2 rounded-lg w-full sm:w-1/2 px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105"
          placeholder="Enter Task Here"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <input
          type="text"
          className="text-lg border-gray-300 border-2 rounded-lg w-full sm:w-1/2 px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-6 py-2 text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-110">
          Add Task
        </button>
      </form>
      <hr className="border-gray-300" />
      <div className="p-4 sm:p-8 text-gray-800 bg-gray-100">
        {mainTask.length === 0 ? (
          <h2 className="text-center text-lg text-gray-500 mt-5 animate-fadeIn">
            No Task Available
          </h2>
        ) : (
          <ul>
            {mainTask.map((task, i) => (
              <li
                key={i}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white shadow-md rounded-lg p-4 mb-5 animate-slideIn"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
                  <h5 className="text-xl font-semibold text-gray-800 mb-2 sm:mb-0">
                    {task.title}
                  </h5>
                  <h6 className="text-sm font-medium text-gray-600">
                    {task.desc}
                  </h6>
                </div>
                <button
                  onClick={() => deleteHandler(i)}
                  className="bg-red-500 text-white rounded font-bold px-4 py-2 mt-3 sm:mt-0 sm:ml-5 hover:bg-red-600 transition-all duration-300 ease-in-out transform hover:scale-110"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Page;
