import jwt from "jsonwebtoken";
const secret = "shouvo@gmailandSomethingWhichStartWith1234"



function setUser(user){
    return json.sign(user, secret)
}

function getUser(id, user){
    return sessionIdToUserMap.set(id);
}

export {
    getUser,
    setUser
};
