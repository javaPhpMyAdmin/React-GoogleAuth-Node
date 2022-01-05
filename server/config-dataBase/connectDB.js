const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/google_auth';

mongoose.Promise = global.Promise;
exports.connect = () => {
    mongoose
        .connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Successfully conected to database');
        })
        .catch((error) => {
            console.log('Database connection failed');
            console.error(error);
            process.exit(1);
        })
}