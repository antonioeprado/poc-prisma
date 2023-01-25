import express from "express";
import cors from "cors";
import { loadEnv } from "@config";

loadEnv();

const app = express();
app.use(express.json());
app.use(cors());
app.get("/health", (req, res) => res.send("Ok!"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`App running on port: ${PORT}`));
