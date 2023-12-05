import style from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from "next/image"
const SingleProductPage = () => {
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
                    <label> Title</label>
                    <input type="text" name="title" placeholder="John Doe" />
                    <label> Price</label>
                    <input type="number" name="price" placeholder="123" />
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder="12" />
                    <label>Color</label>
                    <input type="text" name="color" placeholder="red" />
                    <label>Size</label>
                    <textarea type="text" name="size" placeholder="xyz"></textarea>
                    <label>Cat</label>
                    <select name="cat" id="cat">
                        <option value="Kitchen">Kitchen</option>
                        <option value="Computer">Computer</option>
                    </select>
                    <label>Decription</label>
                    <textarea name="des" id="des" rows="10" placeholder="description" ></textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage