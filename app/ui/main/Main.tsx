"use client"

import { useState } from "react"
import type { Todo } from "@/types/Todo"
import TodoItem from "./TodoItem/TodoItem"


export default function Main() {
    const [todos, setTodos] = useState<Todo[]>([
        {
          "userId": 1,
          "title": "Wave hello! 👋",
          "completed": false,
          "id": 1
        },
        {
          "userId": 1,
          "title": "Get Coffee ☕☕☕",
          "completed": false,
          "id": 2
        },
        {
          "userId": 1,
          "title": "Go to Work ⚒",
          "completed": false,
          "id": 3
        },
        {
          "userId": 1,
          "title": "Write Code 💻",
          "completed": false,
          "id": 4,
        }
      ])

      let content
      if (todos.length === 0) {
          content = <p>No Todos Available</p>
      } else {
          const sortedTodos = todos.sort((a, b) => b.id - a.id)
  
          content = (
              <>
                  {sortedTodos.map(todo => (
                      <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
                  ))}
              </>
          )
      }
  
      return content
}