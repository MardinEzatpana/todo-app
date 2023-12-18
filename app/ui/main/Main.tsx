"use client"

import { useState } from "react"
import type { Todo } from "@/types/Todo"
import { FaTrash } from "react-icons/fa"


export default function Main() {
  const [todos,] = useState<Todo[]>([
    {
      "userId": 1,
      "title": "Wave hello! 👋",
      "completed": false,
      "id": 1
    }
  ])

  let content
    if (todos.length === 0) {
        content = <p>No Todos Available</p>
    } else {

        content = (
            <>
                {todos.map(todo => (
                    <article className="my-4 flex justify-between items-center" key={todo.id}>
                    <label className="text-2xl hover:underline" data-testid="todo-item" htmlFor={todo.id.toString()}>
                        {todo.title}
                    </label>
                    <div className="flex items-center gap-4">
                        <input
                            type="checkbox"
                            id={todo.id.toString()}
                            name="completed"
                            className="min-w-[2rem] min-h-[2rem]"
                        />
        
                        <button
                            data-testid="delete-button"
                            className="p-3 text-xl rounded-2xl text-black border-solid border-black border-2 max-w-xs bg-red-400 hover:cursor-pointer hover:bg-red-300">
                            <FaTrash />
                        </button>
                    </div>
                </article>
                ))}
            </>
        )
    }

  return content
}