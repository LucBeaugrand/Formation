import express from "express";

const app = express();

const port = 3000;

app.post("/addTodo",(req,res) => {

})

app.put("/modifyTodo",(req,res) => {

})

app.get("/getTodoList",(req,res) => {

})

app.get("/getTodo/:id",(req,res) => {

})

app.delete("/deleteTodo/:id",(req,res) => {

})

app.get("/getTodoByTitle/:title",(req,res) => {

})

app.listen(port, () => {
    console.log(`Serveur lance sur http://localhost:${port}`)
})
