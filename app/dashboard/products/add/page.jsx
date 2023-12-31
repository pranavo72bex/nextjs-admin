import { addProduct } from "@/app/lib/action"
import styles from "@/app/ui/dashboard/products/addproduct/addproduct.module.css"
const AddProduct = () => {
    return (
        <div className={styles.container}>
            <form action={addProduct} className={styles.form}>
                <input type="text" placeholder="title" name="title" required />
                <select name="cat" id="cat">
                    <option value="general">Choose a item</option>
                    <option value="phone">phone</option>
                    <option value="kitchen">kitchen</option>
                    <option value="Computer">Computer</option>
                </select>
                <input type="number" placeholder="price" name="price" />
                <input type="number" placeholder="stock" name="stock" />
                <input type="text" placeholder="color" name="color" />
                <input type="text" placeholder="size" name="size" />
                <textarea name="desc" id="" rows="16" placeholder="Description"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddProduct