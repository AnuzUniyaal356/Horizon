import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/connectDb.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRouter from './route/authRoute.js'
import userRouter from './route/userRoute.js'
import contentRouter from './route/contentRoute.js'
import path from 'path';

dotenv.config()
const port = process.env.PORT


const app = express()
app.use(cookieParser())
app.use(express.json())
// app.use(cors({
//    origin:process.env.CLIENT_URL,
//    credentials:true
// }))

const __dirname = path.resolve();



app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/content",contentRouter)

// app.get("/" , (req,res)=>{
//     res.send("Hello from Server")
// })

app.get("/Anuz" , (req,res)=>{
    res.send("Hello Anuz this msg is from Server, server is running fine")
})



app.use(express.static(path.join(__dirname, "/frontend/dist")))

// 4. Client-side routing (for non-API routes)
app.get(/^\/(?!api).*/, (_, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
})

app.listen(port , ()=>{
    console.log("Server Started")
    connectDb()
})
