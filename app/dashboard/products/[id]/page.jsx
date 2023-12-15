import { fetchProduct } from "@/app/lib/data"
import style from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from "next/image"
const SingleProductPage = async ({ params }) => {
    const { id } = params
    const product = await fetchProduct(id)
    console.log(product)
    return (
        <div className={style.container}>
            <div className={style.infoContainer}>
                <div className={style.imageContainer}>
                    <Image src={product.img || "/noavatar.png"} alt="" fill />
                </div>
                <div className={style.username}>{product.title}</div>
            </div>
            <div className={style.formContainer}>
                <form action="" className={style.form}>
                    <label> Title</label>
                    <input type="text" name="title" placeholder={product.title} />
                    <label> Price</label>
                    <input type="number" name="price" placeholder={product.price} />
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder={product.stock} />
                    <label>Color</label>
                    <input type="text" name="color" placeholder={product.color} />
                    <label>Size</label>
                    <textarea type="text" name="size" placeholder={product.size}></textarea>
                    <label>Cat</label>
                    <select name="cat" id="cat">
                        <option value="Kitchen" selected={product.Kitchen}>Kitchen</option>
                        <option value="Computer" selected={product.Computer}>Computer</option>
                    </select>
                    <label>Decription</label>
                    <textarea name="des" id="des" rows="10" placeholder={product.desc} ></textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage