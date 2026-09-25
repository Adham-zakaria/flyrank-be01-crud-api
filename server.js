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

app.listen(PORT, () => {
    console.log(`Server is at http://localhost:${PORT}`);
});
