const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://teja_BT:BT_mongo@cluster0.ub44bba.mongodb.net/aws-api', {
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB', err));

module.exports = mongoose;
