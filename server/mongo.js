const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = 'mongodb://localhost:27017/csv-app';


module.exports = function (app) {
    MongoClient.connect(MONGO_URL, { useNewUrlParser: true })
        .then((connection) => {
            const db = connection.db('csv-app');
            app.transactions = db.collection('transactions');
            console.log('Database connection established')
        })
        .catch((err) => console.error(err))
};