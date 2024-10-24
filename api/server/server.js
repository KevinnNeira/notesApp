const {connectMongodb} = require('../connect/connect')
const express = require('express');
const cors = require('cors');
const user = express();

user.get(cors({
  origin: 'http://localhost:5173'
}));

user.get('/getNotes', async (req, res) => {
    const db = await connectMongodb();
    const collection = db.collection('notes')
    let { accion } = req.query;
    res.status(200).json(await collection.find().project().toArray())
});

user.post('/insertUser', express.json(), async (req, res) => {
    const db = await connectMongodb();
    const collection = db.collection('usuarios')
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

let config = { 
    port: "3000",
    host: "localhost"
}
user.listen(config, ()=>{
    console.log(`http://localhost:3000`);
})

module.exports = user;