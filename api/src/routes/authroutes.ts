import express from "express";

import { signup } from "../controller/Signup";
import { signin } from "../controller/SignIn";

const router = express.Router();

router.post('/auth/signup', signup);
router.post('/auth/signin', signin);


export default router;
