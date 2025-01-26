import User from "../Models/user.js"


async function handleUserSigup(req, res) {
    const {name, email, password} = req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.render("home");
}

export {
    handleUserSigup,
}