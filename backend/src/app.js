const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

// eslint-disable-next-line no-unused-vars
const auth = require("./middlewares/auth");

// let's create express app

const app = express();

// use some application-level middlewares

const corsOptions = {
  origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

// load router

const router = require("./router");
const authRoutes = require("./router");

app.use(router);

// ready to export

router.use("/auth", authRoutes);
module.exports = app;
