import { addUser } from "@/app/lib/action"
import styles from "@/app/ui/dashboard/users/addUser/adduser.module.css"
const AddUserPage = () => {
    return (
        <div className={styles.container}>
            <form action={addUser} className={styles.form}>
                <input type="text" placeholder="username" name="username" required />
                <input type="email" placeholder="email" name="email" />
                <input type="password" placeholder="password" name="password" required />
                <input type="phone" placeholder="phone" name="phone" required />
                <select name="isAdmin" id="isAdmin">
                    <option value={false} >Is Admin</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive">
                    <option value={true} >Is Active</option>
                    <option value={true}>Yes</option>
                    <option value={true}>No</option>
                </select>
                <textarea name="address" id="" rows="16" placeholder="Address"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddUserPage