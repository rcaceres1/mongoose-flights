const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost:27017/flightJournal', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`${db.name} is connected on ${db.host}`);
});

db.on('error', function(err) {
    console.log('MongoDB has thrown an error: ', err);
});