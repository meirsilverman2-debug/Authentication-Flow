import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import "./db/db.js";
dotenv.config();
import userRoutes from "./routes/user.routes.js";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(cors({}));
app.use(express.json());

app.use("/users", userRoutes);


app.use((_, res) => {
    res.status(404).json({
        success: false,
        massage: "Route not found",
    });
});

app.use();

app.listenerCount(PORT, () => {
    console.log(`Server is runing on http://localhost:${PORT}`);
    
})
