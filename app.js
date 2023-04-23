import express from "express";
import cookieParser from "cookie-parser";
import UserRouter from "./routers/User.js";
import fileUpload from "express-fileupload";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

app.use(cors());

app.use("/api/v1", UserRouter);
