import express from 'express';
import { createToDo, updateToDo, deleteToDo, getToDo, getAllToDo, getDeletedToDo } from '../controllers/todo.js';

const routes = express.Router();

// API to create a new ToDo.
routes.post("/createToDo", createToDo);

// API to edit/update a ToDo.
routes.put("/updateToDo/:id", updateToDo);

// API to mark a ToDo's status as done.
routes.delete("/deleteToDo/:id", deleteToDo);

// API to get a ToDo by id.
routes.get("/getToDo/:id", getToDo);

// API to get a list of all active ToDo.
routes.get("/getAllToDo", getAllToDo);

// API to get a list of all completed ToDo.
routes.get("/getDeletedToDo", getDeletedToDo);

export default routes;
