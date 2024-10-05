import React, { useEffect, useState } from 'react';
import Column from "../components/Column";
import useTodoCalls from '../hooks/useTodoCalls';
import AddTodo from '../components/AddTodo';
import { Todo } from '../../types'; 

const Home: React.FC = () => {
  const { getTodo, delTodo, putTodo } = useTodoCalls();
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [todoToEdit, setTodoToEdit] = useState<Todo | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const todos = await getTodo();
      setTasks(todos);
    };
    fetchTasks();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    await putTodo(id, { status } as Partial<Todo>);

  
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task._id === id ? { ...task, status } : task))
    );
  };
  
  const deleteTask = async (id: string) => {
    await delTodo(id);
    setTasks((prevTasks: any) => prevTasks.filter((task: any) => task._id !== id));
  };

  const editTask = (task: Todo) => {
    setTodoToEdit(task);
  };

  const columns = ["to do", "in progress", "done"];

  return (
    <div className='min-h-screen bg-gray-400 flex flex-col p-4'>
      <h1 className="text-center text-[2rem]">Kanban Board</h1>
      <div>
        <AddTodo todoToEdit={todoToEdit} setTodoToEdit={setTodoToEdit} setTasks={setTasks} /> 
      </div>
      <div className="flex justify-center my-3 flex-wrap gap-3">
        {columns.map((column) => (
          <Column
            key={column}
            title={column}
            tasks={tasks.filter((task) => task.status === column)}
            onUpdateStatus={updateStatus}
            onEditTask={editTask}
            onDeleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
