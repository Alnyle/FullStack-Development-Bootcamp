import express from "express";
const router = express.Router();
import protect from "../middleware/authMiddleware.js";
import { getGoals, createGoal, updateGoal, deleteGoal,  } from "../controllers/goalController.js";




router.route('/').get(protect ,getGoals).post(protect ,createGoal);
router.route('/:id').put(protect ,updateGoal).delete(protect ,deleteGoal);




export default router;