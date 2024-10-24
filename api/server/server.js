const { connectMongodb } = require('../connect/connect');
const express = require('express');
const cors = require('cors');
const user = express();

user.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
}));

user.use(express.json());
user.get('/getNotes', async (req, res) => {
    const db = await connectMongodb();
    const collection = db.collection('notes');
    let { accion } = req.query;
    res.status(200).json(await collection.find().project().toArray());
});

user.post('/users', async (req, res) => {
    const db = await connectMongodb();
    const collection = db.collection('users');
    const { Username, Email, Password } = req.body;

    if (!Username || !Email || !Password) {
        return res.status(400).json({ message: "Username, Email and Password are required" });
    }

    const newUser = {
        Username,
        Email,
        Password
    };

    try {
        const result = await collection.insertOne(newUser);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "User not created" });
    }
});

user.post('/users/login', async (req, res) => {
    const db = await connectMongodb();
    const collection = db.collection('users');
    const { Email, Password } = req.body;

    if (!Email || !Password) {
        return res.status(400).json({ message: "Email and Password are required" });
    }

    try {
        const user = await collection.findOne({ Email });

        if (user && user.Password === Password) {
            return res.status(200).json({ message: "Login successful", user });
        } else {
            return res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "An error occurred during login" });
    }
});

let config = { 
    port: 3000,
    host: "localhost"
};

user.listen(config.port, () => {
    console.log(`Server running at http://${config.host}:${config.port}`);
});

module.exports = user;
