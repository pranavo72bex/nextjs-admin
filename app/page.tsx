"use client"
import { useQuery } from '@tanstack/react-query'
import style from './page.module.css'

interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}
export default function Home() {
  const { data: todoData, isLoading, isError, isSuccess } = useQuery<Todo[]>({ queryKey: ["todos"], queryFn: () => fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()) })
  if (isLoading) return <main><div className={style.isloading}>Looding...</div></main>
  if (isError) return <main><div className={style.iserror}>Error happened </div></main>
  return (
    <main>
      <div className={style.todos}>
        {isSuccess && Array.isArray(todoData) && todoData.map((todo: Todo) => <div key={todo.id} className={style.todo}>{todo.title}</div>)}
      </div>
    </main>
  )
}