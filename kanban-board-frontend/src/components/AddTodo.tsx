import React, { useState, useEffect } from "react";
import useTodoCalls from "../hooks/useTodoCalls";
import { Todo } from '../../types'; 

interface AddTodoProps {
  todoToEdit: Todo | null;  
  setTodoToEdit: (task: Todo | null) => void; 
  setTasks: React.Dispatch<React.SetStateAction<Todo[]>>;}

const AddTodo: React.FC<AddTodoProps> = ({ todoToEdit, setTodoToEdit, setTasks }) => {
  const { postTodo, putTodo } = useTodoCalls(); 

  const [todoInfo, setTodoInfo] = useState<Todo>({
    title: "",
    description: "",
  });

  const [error, setError] = useState<string>(""); 

  useEffect(() => {
    if (todoToEdit) {
      setTodoInfo({
        title: todoToEdit.title,
        description: todoToEdit.description,
      });
    } else {
      setTodoInfo({
        title: "",
        description: "",
      });
    }
  }, [todoToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTodoInfo({ ...todoInfo, [e.target.name]: e.target.value });
    setError(""); 
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!todoInfo.title || !todoInfo.description) {
      setError("Title and description are required.");
      return;
    }
  
    if (todoToEdit) {
      await putTodo(todoToEdit._id as string, todoInfo);
      setTasks((prevTasks: Todo[]) => 
        prevTasks.map((task: Todo) => 
          task._id === todoToEdit?._id ? { ...task, ...todoInfo } : task
        )
      );
      
    } else {
      const newTodo = await postTodo(todoInfo);
      if (newTodo) {
        setTasks((prevTasks: Todo[]) => [...prevTasks, newTodo as Todo]);

      }
    }
    handleClose(); 
  };

  const handleClose = () => {
    setTodoToEdit(null); 
    setTodoInfo({ title: "", description: "" }); 
  };

  return (
    <div className="mt-5 mb-2">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm mx-auto bg-gray-100 p-4 shadow-md rounded-2xl flex flex-col gap-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Title *"
          value={todoInfo.title}
          onChange={handleChange}
          className="p-2 border"
        />
        <textarea
          name="description"
          placeholder="Description *"
          value={todoInfo.description}
          onChange={handleChange}
          className="p-2 border"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>} 
        <div className="flex justify-between gap-2">
          <button type="submit" className="bg-[#2E7D32] hover:bg-[#1A5E21] text-white px-4 py-2 w-full rounded">
            {todoToEdit ? "Update" : "Add"}
          </button>
          {todoToEdit && (
            <button type="button" onClick={handleClose} className="text-white bg-red-500 hover:bg-[#BB2D3B] px-4 py-2 w-full rounded">
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
