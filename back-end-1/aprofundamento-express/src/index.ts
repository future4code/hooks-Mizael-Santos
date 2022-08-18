import express, { Request, Response } from "express";
import cors from "cors";
import { arrayAfazeres } from "./informacoes";
import { v4 as generateId } from "uuid";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/ping", (req, res) => {
  res.send("Pong! 🏓");
});

// endpoit para buscar ou afazeres completos ou incompletos:
app.get("/toDo", (req: Request, res: Response) => {
  const toDoStatus = req.query.completed;
  let listToDoStatus;
  if (toDoStatus === "sim") {
    listToDoStatus = arrayAfazeres.filter((toDo) => toDo.completed === true);
  } else if (toDoStatus === "não") {
    listToDoStatus = arrayAfazeres.filter((toDo) => toDo.completed === false);
  } else {
    listToDoStatus = "Tarefa completa? sim ou não";
  }
  res.send(listToDoStatus);
});

// criacao de endpoit de criacao de afazeres:

app.post("/toDo/create/:userId", (req: Request, res: Response) => {
  try {
    // const userName = req.headers.authorization
    // const user = users.find((user) => user.id === userName)
    // const user = arrayAfazeres.find((user) => user.id === userId)
    // if (!user) throw new Error("Usuário não encontrado")
    const userId = Number(req.params.userId);
   
    const title = req.body.title as string;
    const completed = req.body.completed;
    let booleanCompleted: boolean;
    if (completed === "sim") {
      booleanCompleted = true;
    } else completed === "não";
    booleanCompleted = false;
    const toDoAtualizado = {
      userId: userId,
      id: generateId(),
      title: title,
      completed: booleanCompleted,
    };
    arrayAfazeres.push(toDoAtualizado);
    res.send(arrayAfazeres);
  } catch (error: any) {
    res.send(error.message);
  }
});


// endpoint de editar afazeres:

app.get("/toDo/edit/:title",(req: Request, res: Response)=>{
    const editToDo = req.params.title
    const toDo = arrayAfazeres.find(toDo => toDo.title === editToDo)
    if (!toDo) throw new Error("Tarefa não encontrada")
    if(toDo.completed === true){
        toDo.completed = false
    } else {
        toDo.completed = true
    }
    res.send(toDo)
})


// endpoint de deletar

app.delete("/toDo/del/:id",(req: Request, res: Response)=>{
    const toDoId = Number(req.params.id)
    const listToDos = arrayAfazeres.map((toDo)=>{
      if(toDo.id === toDoId){
        return{}
      }
      return toDo
    })
    res.send(listToDos)
})


//endpoint para retornar 

app.get("/toDo/search/:userId",(req: Request, res: Response)=>{
   try {
        const userId = Number(req.params.userId)
        const user = arrayAfazeres.filter((user) => user.id === userId)
        res.send(user)
    } 
    catch (error: any) {
        res.send(error.mensage)
    }
})


app.listen(3003, () => console.log("servidor rodando na porta 3003"));



