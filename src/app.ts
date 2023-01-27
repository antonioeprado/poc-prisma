import express from "express";
import cors from "cors";
import { loadEnv } from "@config";
import {
  authRouter,
  familiesRouter,
  productsRouter,
  usersRouter,
} from "@routers";

loadEnv();

const app = express();
app.use(express.json());
app.use(cors());
app.get("/health", (req, res) => res.send("Ok!"));
app.use("/users", usersRouter);
app.use("/auth/*", authRouter);
app.use("/auth/products", productsRouter);
app.use("/auth/families", familiesRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`App running on port: ${PORT}`));
