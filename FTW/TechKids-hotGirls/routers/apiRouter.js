const express=require('express')
const apiRouter=express.Router()
const userRouter=require('./userRouter')
const imageRouter=require('./imageRouter')


apiRouter.use("/",(req,res,next)=>{  //middleware, neu truy cap / thi phai di qua cai nay, can cai next() de tiep tuc
    console.log("Middleware")
    next();
})

apiRouter.get("/",(req,res)=>{
    res.send("OKKKKKK")
})

apiRouter.use("/users",userRouter)
apiRouter.use("/images",imageRouter)

module.exports=apiRouter