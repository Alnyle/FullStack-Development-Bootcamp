import mongoose from "mongoose";

const seriesSchema = mongoose.Schema ({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    rating: {
        type: Number,
    },
    yearOfRelease: {
        type: Number,
    }
}, {timestamps: true});

const Series = mongoose.model("series", seriesSchema);

export default Series;

