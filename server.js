import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Root endpoint: describes the API
app.get("/", (req, res) => {
    res.status(200).json({
        name: 'Task API',
        version: '1.0.0',
        endpoints: ['/tasks']
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'Server is healthy'
    });
});

// list of tasks
let tasks = [
    { id: 1, title: 'Task 1', done: false },
    { id: 2, title: 'Task 2', done: true },
    { id: 3, title: 'Task 3', done: false }
];

app.get("/tasks", (req, res) => {
    res.status(200).json(tasks);
});

app.get("/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    if (!task) {
        return res.status(404).json({ error: `Task ${req.params.id} not found` });
    }
    res.status(200).json(task);
});

app.listen(PORT, () => {
    console.log(`Server is at http://localhost:${PORT}`);
});
