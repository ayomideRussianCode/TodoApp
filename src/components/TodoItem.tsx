import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex justify-between items-center p-4 border rounded-lg shadow-sm">
      <div>
        <h3 className={`text-lg ${todo.completed ? 'line-through' : ''}`}>{todo.title}</h3>
        <p className="text-sm text-gray-500">User ID: {todo.userId}</p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => onToggle(todo.id)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;