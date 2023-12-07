import mongoose from "mongoose";

export const connectToDB = async () => {
    const connection = {};
    try {
        const result = await mongoose.connect(process.env.MONGO);
        connection.result = result;
    } catch (error) {
        throw new Error(error);
    }
};