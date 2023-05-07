const fs = require("fs")
const express = require("express")

const app = express()
//when app get arequesty in path "/" you the make the respond is to send , so it becomes res.send(""whatever you like to send to the user )
// app.get("/",(req,res)=>{
//     res.send("<h1>a Server is running here</h1>")
// })
app.use(express.static("publicer"))
app.listen(3000,()=>{
    console.log("this is a server")
})
