import {z} from "zod";


// Register zod validtion
export const registerUserSchema = z.object({
    body: z.object({
        email: z.string().email("Email must be valid as email should be"),
        password: z.string().min(8, "Password must be at least 8 characters"),
    }),
});


// Login zod validation
export const loginUserSchema = z.object({
    body: z.object({
        email: z.string().email("Email must be valid"),
        password: z.string().min(1, "Password is required"),
    }),
});


// First you use this command -> npm i zod to insall zod
// second you import zod
// and then you create a variable
//  which will be equale to z.object
//  which will be a specific object
//  structur and each field insid with 
// its own types and length and 
// an error like message if it is 
// not like we astablish here in zod: