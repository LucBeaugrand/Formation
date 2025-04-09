import express from "express";

const app = express();

const port = 3000;

app.use(express.json())

app.get("/",(req,res) => {
    //res.send("Salut le monde")
    res.json({message : "Salut le monde", user: "Moi"})
})

app.listen(port,() => {
    console.log(`Serveur lance sur http://localhost:${port}`)
})