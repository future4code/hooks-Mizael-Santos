import express from "express"
import cors from "cors"
import { arrayPosts, arrayUsers } from "./data"

const app = express()
app.use(express.json())
app.use(cors())
app.get("/Users", (req, res) => {          
    res.send(arrayUsers)
})

app.get("/Posts", (req, res) => {          
    res.send(arrayPosts)
})

app.get("/Posts/:userId",(req,res)=>{
    const userId = req.params.userId
    const listPost = arrayPosts.filter((arrayPosts)=>{
        return(arrayPosts.userId === userId)
    })
    res.send(listPost)
})


app.listen(3003, () => console.log("servidor rodando na porta 3003"))