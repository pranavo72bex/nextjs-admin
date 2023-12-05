import style from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from "next/image"
const SingleUserPage = () => {
    return (
        <div className={style.container}>
            <div className={style.infoContainer}>
                <div className={style.imageContainer}>
                    <Image src="/avatar.png" alt="" fill />
                </div>
                John Doe
            </div>
            <div className={style.formContainer}></div>
        </div>
    )
}

export default SingleUserPage