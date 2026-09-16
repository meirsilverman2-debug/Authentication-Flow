import { Router } from "express";
import { asyncWrapper } from "../utils/asyncWrapper.js";
import { validate } from "../utils/validate.js";
import {
    registerUserSchema, loginUserSchema
} from "../validations/user.validation.js";


const router = Router();

// Register:
router.post(
    "/auth/rgister",
    validate(registerUserSchema),
    asyncWrapper()

)

// Login:
router.post(
    "/auth/login",
    validate(loginUserSchema),
    asyncWrapper()

)


// Get all users:
router.get(
    "/users",
    asyncWrapper()
)

export default router;