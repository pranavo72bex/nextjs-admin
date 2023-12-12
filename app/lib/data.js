import { Product, User } from "./models"
import { connectToDB } from "./utils"

export const fetchUsers = async (q, page) => {

    const regex = new RegExp(q, "i")
    const itemPerPage = 2;
    try {
        connectToDB()
        const count = await User.find({ username: { $regex: regex } }).count();
        const users = await User.find({ username: { $regex: regex } }).limit(itemPerPage).skip(itemPerPage * (page

            - 1))
        return { count, users }
    } catch (error) {
        console.log(error)
        throw new Error("failed to featch user")
    }
}

export const fetchProducts = async (q, page) => {

    const regex = new RegExp(q, "i")
    const itemPerPage = 2;
    try {
        connectToDB()
        const count = await Product.find({ title: { $regex: regex } }).count();
        const products = await Product.find({ title: { $regex: regex } }).limit(itemPerPage).skip(itemPerPage * (page

            - 1))
        return { count, products }
    } catch (error) {
        console.log(error)
        throw new Error("failed to featch user")
    }
}