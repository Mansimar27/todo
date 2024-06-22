import express from 'express';
import { createToDo, updateToDo, deleteToDo, getToDo, getAllToDo, getDeletedToDo } from '../controllers/todo.js';

const routes = express.Router();

routes.post("/createToDo", createToDo);
routes.put("/updateToDo/:id", updateToDo);
routes.delete("/deleteToDo/:id", deleteToDo);
routes.get("/getToDo/:id", getToDo);
routes.get("/getAllToDo", getAllToDo);
routes.get("/getDeletedToDo", getDeletedToDo);

export default routes;
