const {connectMongodb} = require('../connect/connect')
const express = require('express');
const cors = require('cors');
const user = express();

user.use(cors({
  origin: 'http://localhost:5173'
}));

user.get('/getNotes', async (req, res) => {
    const db = await connectMongodb();
    const collection = db.collection('notes')
    let { accion } = req.query;
    res.status(200).json(await collection.find().project().toArray())
});

let config = { 
    port: "3000",
    host: "localhost"
}
user.listen(config, ()=>{
    console.log(`http://localhost:3000`);
})

module.exports = user;