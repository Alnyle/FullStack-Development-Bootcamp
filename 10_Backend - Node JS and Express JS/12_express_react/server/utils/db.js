import mongoose from "mongoose";
const DB = process.env.DB;

const connectDB = async() => {
    try {

        // await mongoose.connect(`mongodb+srv://${DB}`)
        await mongoose.connect("mongodb+srv://Ahmedelniel:Y2TNePwFPD389eRU@seriescluster.czg1hcp.mongodb.net/")
        .then(console.log("Mongoose Server connected"))
    } catch(error) {
        console.log(error);
    }
}

export default connectDB;