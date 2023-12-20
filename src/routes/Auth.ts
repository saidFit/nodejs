import express from 'express';
import { register } from '../controller/Auth';

const router  = express.Router();


router.post('/register',register)
export default router;