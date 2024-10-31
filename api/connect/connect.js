const { MongoClient } = require('mongodb');

exports.connectMongodb = async()=>{
    const url =  `mongodb://mongo:DrFWTcOLqNlTOFQDIPzjcmhHaTKYWfda@junction.proxy.rlwy.net:40546`;
    const usuario = new MongoClient(url)
    await usuario.connect();
    const db = usuario.db('notes');
    return db;
}