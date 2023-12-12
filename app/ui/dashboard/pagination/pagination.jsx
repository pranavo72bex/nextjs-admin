"use client"
import styles from "./pagination.module.css"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
const Pagination = (count) => {
    const searchParams = useSearchParams()
    const { replace } = useRouter()
    const page = searchParams.get("page") || 1
    const pathname = usePathname()
    const params = new URLSearchParams(searchParams)
    const itemPerPage = 2

    const hasPrev = itemPerPage * (parseInt(page) - 1) > 0;
    const hasNext = itemPerPage * (parseInt(page) - 10) + itemPerPage < count

    const handleChangePage = (type) => {
        type === "prev" ? params.set("page", parseInt(page) - 1)
            : params.set("page", parseInt(page) + 1)
        replace(`${pathname}?${params}`)
    }
    return (
        <div className={styles.container}>
            <button className={styles.button} disabled={!hasPrev} onClick={() => handleChangePage("prev")}> Previous</button>
            <button className={styles.button} disabled={!hasNext} onClick={() => handleChangePage("next")}> Next</button>
        </div>
    )
}

export default Pagination