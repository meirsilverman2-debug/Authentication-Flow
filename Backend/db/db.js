// The connection to mongodb:

import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URL || "mongodb://localhost:27017");

try {
    client.connect();
    console.log("mongodb is now connected"); 
} catch (error) {
    console.error(error);
    process.exit(1);
};

export const db = client.db("auth-app")