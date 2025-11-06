import {Router} from 'express';
import {User} from "../models/user.model.js";
import { authCallback } from '../controller/auth.controller.js';

const router = Router();

// router.get('/', (req,res) => {
//     res.send("Auth Route with GET method");
// })

router.post('/callback', authCallback)

export default router;