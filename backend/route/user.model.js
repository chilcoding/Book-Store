import express from "express"
import { login, singup } from "../controller/user.controller.js"
const userRouter = express.Router()


userRouter.post("/singup",singup)
userRouter.post("/login",login)

export default userRouter