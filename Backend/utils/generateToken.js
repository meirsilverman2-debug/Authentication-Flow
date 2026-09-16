import dotenv from "dotenv/config";
import jwt from "jsonwebtoken";


// Creates token:
// For each user we will generate a token so he will not need to signin before every action he wants to do:
// The function gets user ID and return a JWT string which is our token (each token is compose from three parts header,playload,signature);
export function generateToken(userId){
    return jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN})

}


// Checks token + decode:
// Gets a token and verify it and returns the play load with the data and time of creation and the expire time basicly the function decode the token
export function verifyToken(token){
    return jwt.verify(token, process.env.JWT_SECRET);
}
