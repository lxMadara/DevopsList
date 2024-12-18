const express = require('express')
const app = express();
app.use(express.json())

let tasks = []

app.get('/', (req, res) => {
    res.status(200).send({tasks});
});

app.delete('/', (req, res) => {
    const idToDelete = req.query.id;
    if(idToDelete >=0 && idToDelete < tasks.length){
        tasks.splice(idToDelete,1);
    }
    else{
        return res.status(400).send("id incorrecte")
    }
})

app.post('/add-task', (req, res) => {
    const newTask = req.body.task;
    if(newTask){
        tasks.push(newTask);
    }
    res.status(200).json({tasks});
})

const PORT = 3000

app.listen(PORT, () => {
    console.log('serveur lancé');
})