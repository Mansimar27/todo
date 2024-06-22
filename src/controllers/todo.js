import todoSchema from '../models/todo.js';

export const createToDo = async (req, res) => {
    try {
        const { task, priority, status, dueDate } = req.body;
        if (!task || !priority || !status || !dueDate) {
            return res.status(400).send({ success: false });
        }
        await todoSchema.create({ task, priority, status, dueDate });
        return res.status(200).send({ success: true });
    } catch (error) {
        console.log("Error- ", error);
        return res.status(400).send({ success: false });
    }
}

export const updateToDo = async (req, res) => {
    try {
        const { id } = req.params;
        const { task, priority, status, dueDate } = req.body;
        if (!id || !task || !priority || !status || !dueDate) {
            return res.status(400).send({ success: false });
        }
        const isUpdated = await todoSchema.findOneAndUpdate({ _id: id }, { task, priority, status, dueDate });
        if (!isUpdated) {
            return res.status(400).send({ success: false });
        }
        return res.status(200).send({ success: true });
    } catch (error) {
        console.log("Error- ", error);
        return res.status(400).send({ success: false });
    }
}

export const deleteToDo = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send({ success: false });
        }
        const isUpdated = await todoSchema.findOneAndUpdate({ _id: id }, { isDeleted: true });
        if (!isUpdated) {
            return res.status(400).send({ success: false });
        }
        return res.status(200).send({ success: true });
    } catch (error) {
        console.log("Error- ", error);
        return res.status(400).send({ success: false });
    }
}

export const getAllToDo = async (req, res) => {
    try {
        const todos = await todoSchema.find({ isDeleted: false });
        return res.status(200).send({ success: true, todos });
    } catch (error) {
        console.log("Error- ", error);
        return res.status(400).send({ success: false });
    }
}

export const getDeletedToDo = async (req, res) => {
    try {
        const todos = await todoSchema.find({ isDeleted: true });
        return res.status(200).send({ success: true, todos });
    } catch (error) {
        console.log("Error- ", error);
        return res.status(400).send({ success: false });
    }
}
