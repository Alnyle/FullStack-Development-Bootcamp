
import asyncHandler from "express-async-handler";
import Goal from '../models/goalModel.js'
 import User from "../models/userModel.js";

// @des    Get all goals
// @route  GET /api/goals
// @access Private

export const getGoals = asyncHandler(async (req, res) => {

    const goals = await Goal.find({ user: req.user.id });
    res.status(200).json({goals});
});

// @des    Post all goals
// @route  POST /api/goals
// @access Private

export const createGoal = asyncHandler(async (req, res) => {

    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field');
    }
 
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id,
    })

    res.status(200).json(goal)
});

// @des    Put all goals
// @route  PUT /api/goals/:id
// @access Private

export const updateGoal = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found');
    }

    // const user = await User.findById(req.user.id);

    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found');
    }


    if (goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized');
    }

    const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.
        body, {
            new: true, // update the value of the record even does not exist
        }
    )

    res.status(200).json(updateGoal);
});


// @des    Delete all goals
// @route  DELETE /api/goals/:id
// @access Private

export const deleteGoal = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400)
        throw new Error('goal not found exist');
    }


    // const user = await User.findById(req.user.id);

    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found');
    }


    if (goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized');
    }

    const deletedGoal = await Goal.findByIdAndDelete(req.params.id)

    res.status(202).json({message: `delete a goal ${req.params.id}`})
});