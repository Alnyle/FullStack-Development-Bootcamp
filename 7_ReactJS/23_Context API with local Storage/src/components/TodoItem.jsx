import React, { useState } from 'react'
import { useTodo } from '../contexts/index';

const TodoItem = ({todo}) => {
  
   
  const [isTodoEditabel, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  
  const {updateTodo, deleteTodo, toggleComplete} = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg});
    setIsTodoEditable(false);
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  }

  return (
    <div
        className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm
                shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
    >
        <input 
            type="checkbox"
            className='cursor-pointer'
            checked={todo.completed}
            onChange={toggleCompleted} />

            <input 
                type="text"
                className={`border outline-none w-full bg-transparent 
                    rounded-lg ${isTodoEditabel ? "border-black/10 px-2" : "border-transparent"}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditabel}
            />

            <button className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 
            justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
            onClick={() => {
                if (todo.completed) return
                if (isTodoEditabel) {
                    editTodo(); 
                } else setIsTodoEditable((prev) => !prev);
            }}
            disabled={todo.completed}
            >
                {isTodoEditabel ? "📁" : "✏️"}
            </button>
            <button
                onClick={() => deleteTodo(todo.id)} 
                className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 
                    justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'>
                        ❌</button>


    </div>
  )
}

export default TodoItem