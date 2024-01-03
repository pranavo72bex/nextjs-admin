"use client"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import style from './page.module.css'
const Todos = () => {
    const queryClient = useQueryClient()
    const mutation: any = useMutation({
        mutationFn: (newTodo) => {
            return axios.post('http://localhost:3001/todos', newTodo)
        },
        onMutate: (newTodo) => {
            console.log("A mutation is about to happen")
        },
        onError: (error, variables, context) => {
            console.log("An error happened", error.message)
        },
        onSuccess: (data, variables, context) => {
            console.log("Mutation was successful", data)
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
        onSettled: (data, error, variables, context) => {
            console.log("Mutation has been settled")
        }

    })
    const { data: todoData } = useQuery<any>({
        queryKey: ["todos"], queryFn: () =>
            fetch("http://localhost:3001/todos").then(res => res.json())
    })


    return (
        <div>
            {mutation.isLoading ? (
                'Adding todo...'
            ) : (
                <>
                    {mutation.isError ? (
                        <div>An error occurred: {mutation.error.message}</div>
                    ) : null}

                    {mutation.isSuccess ? <div>Todo added!</div> : null}

                    <button
                        onClick={() => {
                            mutation.mutate({ id: new Date(), title: 'Test' })
                        }}
                    >
                        Create Todo
                    </button>
                </>
            )}

            <div className={style.todolist}>
                {
                    todoData?.map((todo) => {
                        return (
                            <div className={style.todo} key={todo.id}>
                                <div className={style.todoTitle}>{todo.title}</div>
                                <div className={style.todoDate}>{todo.date}</div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Todos