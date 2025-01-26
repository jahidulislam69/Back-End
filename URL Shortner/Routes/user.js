import express from "express";
import {handleUserSigup} from "../Controller/users.js"


const router = express.Router();


router.post('/', handleUserSigup)

export default router;