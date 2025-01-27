import express from "express";
import {handleUserSigup, handleUserLogin} from "../Controller/users.js"



const router = express.Router();


router.post('/', handleUserSigup)
router.post('/login', handleUserLogin)

export default router;