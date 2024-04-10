import express from "express";
// import dotenv from "dotenv";
import connectMongodb from "./config/dbconfig";
import routers from "./routers/index";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const url = process.env.DB_URL || "mongodb://localhost:27017/db_asm1_cars";
connectMongodb(url);
routers(app);

export const viteNodeApp = app;
