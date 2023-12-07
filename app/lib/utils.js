import mongoose from "mongoose"

export const connectToDB = async => {
    const connection = {}
    try {
        mongoose.connect(process.env.MONGO)
    } catch (error) {
        throw new Error(error)
    }
}