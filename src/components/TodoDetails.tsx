import React from 'react';
import { Todo } from '../types';

interface TodoDetailsProps {
  todo: Todo;
  onBack: () => void;
}

const TodoDetails: React.FC<TodoDetailsProps> = ({ todo, onBack }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold">{todo.title}</h2>
      <p>Task ID: {todo.id}</p>
      <p>Status: {todo.completed ? 'Completed' : 'Incomplete'}</p>
      <p>User ID: {todo.userId}</p>
      <button onClick={onBack} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded">
        Back
      </button>
    </div>
  );
};

export default TodoDetails;