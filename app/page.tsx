"use client"
import { useQuery, useIsFetching } from '@tanstack/react-query'

export default function Home() {
  const { data } = useQuery<any>({ queryKey: ["user"], queryFn: () => fetch("/api/user").then(res => res.json()) })
  return (
    <main>
      <div>

      </div>
    </main>
  )
}