import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/todo.js';

const port = 1212;
const app = express();

mongoose.connect("mongodb+srv://mansimar:mansimar.todo123@todocluster.udfowtl.mongodb.net/TodoApp?retryWrites=true&w=majority&appName=ToDoCluster")
    .then(() => {
        console.log("Connected to DB!");
        app.listen(port, () => {
            console.log("Server Started at-", port);
        });
    }).catch((err) => {
        console.log("Error connecting to DB- ", err);
    });

app.use(cors());
app.use("/", routes);
app.use(express.json());
