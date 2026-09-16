import { Router } from "express";
import { asyncWrapper } from "../utils/asyncWrapper.js";

const router = Router()

// Register:
router.post(
    "/auth/rgister",
    asyncWrapper()

)

// Login:
router.post(
    "/auth/login",
    asyncWrapper()

)


// Get all users:
router.get(
    "/users",
    asyncWrapper()
)
