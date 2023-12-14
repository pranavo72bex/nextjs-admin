import { redirect } from "next/navigation";
import { User } from "./models"
import { connectToDB } from "./utils";
import { revalidatePath } from 'next/cache'

export const addUser = async (FormData) => {
    "use server"
    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(FormData);

    try {
        connectToDB()
        const newUser = new User({
            username, email, password, phone, address, isAdmin, isActive,
        })

        await newUser.save();
    } catch (error) {
        console.log(error)
        throw new Error("fail to create user!")
    }

    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}