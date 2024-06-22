import mongoose from 'mongoose';

// Schema for todo collection in MongoDB (Atlas).
var todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    priority: {
        type: Boolean,
        default: false,
        required: false,
    },
    status: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
        required: false,
    },
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});


export default mongoose.model('todo', todoSchema);
