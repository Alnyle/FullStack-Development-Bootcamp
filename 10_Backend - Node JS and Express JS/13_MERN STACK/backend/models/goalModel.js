import { text } from "express";
import mongoose from "mongoose";


const goalSchema = mongoose.Schema({
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },

    text: {
        type: String,
        required: [true, 'Please add a text value'],
    }
}, 
{
    timestamps: true,
});


const Goal = mongoose.model('goal', goalSchema);

export default Goal; 