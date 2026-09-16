import bcrypt from "bcrypt";

// Hash is One-way action, the original password cannot be recovered from this hash value. 

const SALT_ROUNDS = 10;


// This function gets a password and a number of rounds and returns/creates hash from it:
export async function hashPassword(plainPassword){
    return bcrypt.hash(plainPassword, SALT_ROUNDS);
};


// This function gets a password and an hash created from a password and compare them if hash came from this password meaning a promise of boolean (true/false)
export async function comparePassword(plainPassword, hashPassword){
    return bcrypt.compare(plainPassword, hashPassword );
};