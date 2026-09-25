import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Root endpoint returning plain text hello msg
app.get("/", (req, res) => {
    res.status(200).send("Hello, World!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
