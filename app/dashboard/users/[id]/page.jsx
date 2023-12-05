import style from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from "next/image"
const SingleUserPage = () => {
    return (
        <div className={style.container}>
            <div className={style.infoContainer}>
                <div className={style.imageContainer}>
                    <Image src="/noavatar.png" alt="" fill />
                </div>
                <div className={style.username}>John Doe</div>
            </div>
            <div className={style.formContainer}>
                <form action="" className={style.form}>
                    <label> Username</label>
                    <input type="text" name="username" placeholder="John Doe" />
                    <label> Email</label>
                    <input type="email" name="email" placeholder="John@gmail.com" />
                    <label> Password</label>
                    <input type="password" name="password" />
                    <label> Phone</label>
                    <input type="text" name="username" placeholder="John Doe" />
                    <label> Address</label>
                    <textarea type="text" name="address" placeholder="John Doe"></textarea>
                    <label>Is Admin</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <label> Is Active</label>
                    <select name="isActive" id="isActive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage