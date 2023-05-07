const fs = require("fs")
const express = require("express")

const app = express()

// app.get("/",(req,res)=>{
//     res.send("<h1>a Server is running here</h1>")
// })
app.use(express.static("publicer"))
app.listen(3000,()=>{
    console.log("this is a server")
})
