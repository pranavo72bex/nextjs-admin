"use server"
import { redirect } from "next/navigation";
import { Product, User } from "./models"
import { connectToDB } from "./utils";
import { revalidatePath } from 'next/cache'
import bcrypt from "bcrypt";

export const addUser = async (FormData) => {

    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(FormData);

    try {
        connectToDB()
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username, email, password: hashedPassword, phone, address, isAdmin, isActive,
        })

        await newUser.save();
    } catch (error) {
        console.log(error)
        throw new Error("fail to create user!")
    }

    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}



export const updatUser = async (FormData) => {

    try {
        connectToDB()
        const { id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(FormData);
        const updateFields = { username, email, phone, address, isAdmin, isActive }
        Object.keys(updateFields).forEach((key) => (updateFields[key] === undefined || "") && delete updateFields[key])
        await User.findByIdAndUpdate(id, updateFields);
    } catch (error) {
        console.log(error)
        throw new Error("fail to update user!")
    }
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}


export const addProduct = async (FormData) => {

    const { title, desc, price, stock, color, size } = Object.fromEntries(FormData);

    try {
        connectToDB()

        const newProduct = new Product({
            title, desc, price, stock, color, size,
        })

        await newProduct.save();
    } catch (error) {
        console.log(error)
        throw new Error("fail to add product!")
    }

    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
}

export const updateProduct = async (FormData) => {

    try {
        connectToDB()
        const { title, desc, price, stock, color, size } = Object.fromEntries(FormData);
        const updateFields = { title, desc, price, stock, color, size }
        Object.keys(updateFields).forEach((key) => (updateFields[key] === undefined || "") && delete updateFields[key])
        await Product.findByIdAndUpdate(id, updateFields);
    } catch (error) {
        console.log(error)
        throw new Error("fail to update product!")
    }
    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
}
export const deleteProduct = async (FormData) => {

    const { id } = Object.fromEntries(FormData);

    try {
        connectToDB()
        await Product.findByIdAndDelete(id);
    } catch (error) {
        console.log(error)
        throw new Error("fail to delete product!")
    }

    revalidatePath("/dashboard/products")
}

export const deleteUser = async (FormData) => {

    const { id } = Object.fromEntries(FormData);

    try {
        connectToDB()
        await User.findByIdAndDelete(id);
    } catch (error) {
        console.log(error)
        throw new Error("fail to user product!")
    }

    revalidatePath("/dashboard/users")
}