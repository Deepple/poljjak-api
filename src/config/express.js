import express from "express";
import passport from "passport";
import router from "../api/routes/index.js"

export const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(passport.initialize());
app.use(router);