import express from 'express';
const router = express.Router();
import { getSong, addSong, listSong, removeSong } from '../controllers/songController.js';
import upload from '../middleware/multer.js'


router.route('/add').post(upload.fields(Array({name: 'audio', maxCount: 1}, {name: 'image', maxCount: 1})),addSong);
router.route('/list').get(listSong);
router.route('/remove').post(removeSong);


export default router;