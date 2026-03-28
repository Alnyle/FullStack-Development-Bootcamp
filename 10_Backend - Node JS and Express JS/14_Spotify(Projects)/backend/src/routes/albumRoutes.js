import express from 'express';
import { addAlbum, listAlbum, removeAlbum } from '../controllers/albumController.js';
const router = express.Router();
import upload from '../middleware/multer.js';

router.route('/add',).post(upload.single('image'), addAlbum);
router.route('/list').get(listAlbum);
router.route('/remove').post(removeAlbum);

export default router;