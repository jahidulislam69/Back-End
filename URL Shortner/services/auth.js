import jwt from "jsonwebtoken";
const secret = "shouvo@gmailandSomethingWhichStartWith1234"


const sessionIdTouserMap = new Map();

function setUser(id, user){
    sessionIdTouserMap.set(id, user)
}

function getUser(id,){
    return sessionIdTouserMap.get(id)
}

export {
    getUser,
    setUser
};
