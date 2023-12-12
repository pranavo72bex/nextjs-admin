"use client"
import styles from "./pagination.module.css"
import { useRouter, usePathname, useSearchParams } from "next/navigation"

const Pagination = ({ count }) => {
    const searchParams = useSearchParams()
    const { replace } = useRouter()
    const page = parseInt(searchParams.get("page")) || 1
    const pathname = usePathname()
    const params = new URLSearchParams(searchParams)
    const itemPerPage = 2

    const hasPrev = page > 1;
    const hasNext = itemPerPage * page < count;

    const handleChangePage = (type) => {
        if (type === "prev" && hasPrev) {
            params.set("page", page - 1);
        } else if (type === "next" && hasNext) {
            params.set("page", page + 1);
        }
        replace(`${pathname}?${params}`);
    }

    return (
        <div className={styles.container}>
            <button className={styles.button} disabled={!hasPrev} onClick={() => handleChangePage("prev")}> Previous</button>
            <button className={styles.button} disabled={!hasNext} onClick={() => handleChangePage("next")}> Next</button>
        </div>
    )
}

export default Pagination