import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONO_URL);

        console.log(`MongoDB Connect ${conn.connection.host}`.cyan.underline);
    } catch(error) {
        console.log(`error`.red);
        process.exit(1)
    }
}

export default connectDB;