var mongoose = require('mongoose');
mongoose.Promise =global.Promise;
//added URI for mongo db
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');


mongoose.exports ={mongoose};
