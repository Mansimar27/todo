import todoSchema from '../models/todo.js';

// We can make this method as a common utility.
const sendResponse = (res, statusCode, success, message, data = {}) => {
    return res.status(statusCode).send({
        success,
        message,
        data,
    });
}

export const createToDo = async (req, res) => {
    try {
        const { task, priority, status, dueDate } = req.body;
        if (!task || !status || !dueDate) {
            sendResponse(res, 400, false, "Bad Request, Invalid Arguments Received!");
        }
        const newToDo = await todoSchema.create({ task, priority, status, dueDate });
        sendResponse(res, 200, true, "New ToDo Created!", newToDo);
    } catch (error) {
        console.log("Error- ", error);
        sendResponse(res, 400, false, "Error While Creating a New ToDo!");
    }
}

export const updateToDo = async (req, res) => {
    try {
        const { id } = req.params;
        const { task, priority, status, dueDate } = req.body;
        if (!id || !task || !status || !dueDate) {
            sendResponse(res, 400, false, "Bad Request, Invalid Arguments Received!");
        }
        const isUpdated = await todoSchema.findOneAndUpdate({ _id: id }, { task, priority, status, dueDate });
        if (!isUpdated) {
            sendResponse(res, 400, false, "ToDo Not Found!");
        }
        sendResponse(res, 200, true, "ToDo Updated!", isUpdated);
    } catch (error) {
        console.log("Error- ", error);
        sendResponse(res, 400, false, "Error While Updating a ToDo!");
    }
}

export const deleteToDo = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            sendResponse(res, 400, false, "Bad Request, Invalid Arguments Received!");
        }
        const isUpdated = await todoSchema.findOneAndUpdate({ _id: id }, { isDeleted: true });
        if (!isUpdated) {
            sendResponse(res, 400, false, "ToDo Not Found!");
        }
        sendResponse(res, 200, true, "ToDo Marked as Done!", isUpdated);
    } catch (error) {
        console.log("Error- ", error);
        sendResponse(res, 400, false, "Error While Updating a ToDo!");
    }
}

export const getToDo = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            sendResponse(res, 400, false, "Bad Request, Invalid Arguments Received!");
        }
        const todo = await todoSchema.findById(id);
        if (!todo) {
            sendResponse(res, 400, false, "ToDo Not Found!");
        }
        sendResponse(res, 200, true, "ToDo Fetched from DB!", todo);
    } catch (error) {
        console.log("Error- ", error);
        sendResponse(res, 400, false, "Error While Getting a ToDo!");
    }
}

export const getAllToDo = async (req, res) => {
    try {
        const todos = await todoSchema.find({ isDeleted: false });
        sendResponse(res, 200, true, "ToDo List Fetched from DB!", todos);
    } catch (error) {
        console.log("Error- ", error);
        sendResponse(res, 400, false, "Error While Getting ToDo List!");
    }
}

export const getDeletedToDo = async (req, res) => {
    try {
        const todos = await todoSchema.find({ isDeleted: true });
        sendResponse(res, 200, true, "ToDo List Fetched from DB!", todos);
    } catch (error) {
        console.log("Error- ", error);
        sendResponse(res, 400, false, "Error While Getting ToDo List!");
    }
}
