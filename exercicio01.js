const express = require ('express');
const app = express ();

app.get("/", function (req, res){
    res.send("Página inicial")
})

app.get("/sobre", function (req,res){
    console.log("Página sobre")
})

app.get("/contato", function (req, res){
    console.log("Página de contatos")
})

app.get('/redes', function(req, res){
    console.log("Nossas Redes sociais!")
})



app.listen(8081, function (req, res) {
    console.log("Rota ativa!")
})