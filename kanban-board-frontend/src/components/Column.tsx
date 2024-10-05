import React from 'react';
import { useDrop } from 'react-dnd';
import Task from './Task';
import { Todo } from '../../types'; 

interface ColumnProps {
  title: string;
  tasks: Todo[];
  onUpdateStatus: (id: string, status: string) => void;
  onEditTask: (task: Todo) => void;  // Edit için prop ekledik
  onDeleteTask: (id: string) => void;  // Delete için prop ekledik
}

const Column: React.FC<ColumnProps> = ({ title, tasks, onUpdateStatus, onEditTask, onDeleteTask }) => {
  const [, drop] = useDrop(() => ({
    accept: 'TASK',
    drop: (item: { id: string }) => {
      onUpdateStatus(item.id, title.toLowerCase());
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className={`shadow-2xl bg-gray-200 p-4 rounded-2xl w-96 flex-wrap`}>
      <h2 className="font-bold text-lg text-center my-2">{title.toUpperCase()}</h2>
      {tasks.map((task) => (
        <Task 
          key={task._id} 
          task={task} 
          onUpdateStatus={onUpdateStatus} 
          onEdit={onEditTask} 
          onDelete={onDeleteTask} 
        />
      ))}
    </div>
  );
};

export default Column;
