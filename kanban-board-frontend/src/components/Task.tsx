import React from "react";
import { useDrag } from "react-dnd";
import { Todo } from "../../types";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

interface TaskProps {
  task: Todo;
  onUpdateStatus: (id: string, status: string) => void;
  onEdit: (task: Todo) => void;
  onDelete: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, onEdit, onDelete }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id: task._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`flex flex-col gap-y-3 cursor-pointer p-4 rounded-2xl shadow-xl mb-2 ${
        task.status === "to do"
          ? "bg-red-200"
          : task.status === "in progress"
          ? "bg-yellow-200"
          : task.status === "done"
          ? "bg-green-200"
          : ""
      } ${isDragging ? "opacity-50" : ""}`}
    >
      <h3 className="font-bold text-center">{task.title}</h3>
      <p>{task.description}</p>
      <div className="flex justify-center gap-3 items-center mt-2">
        <button
          onClick={() => onEdit(task)}
          className="text-blue-500 hover:text-blue-700"
        >
          <FaPen />
        </button>
        <p className="text-center">
          {task.status ? task.status.toUpperCase() : "Unknown Status"}
        </p>
        <button onClick={() => task._id && onDelete(task._id)} className="text-red-500 hover:text-red-700">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Task;
