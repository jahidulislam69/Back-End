import { v4 as uuidv4 } from 'uuid';
import User from "../Models/user.js"
import {getUser, setUser} from '../services/auth.js'


async function handleUserSigup(req, res) {
    const {name, email, password} = req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.redirect('/');
}
async function handleUserLogin(req, res) {
    const {email, password} = req.body;
    const user = await User.findOne({email, password});
    if (!user)
        return res.render("login", {
            error: "Invalid Username or password"
        });
    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie("uid", sessionId)
    return res.redirect('/')
}

export {
    handleUserSigup,
    handleUserLogin,
}