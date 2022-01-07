const express = require('express');

const app = express();

require('./config-dataBase/connectDB').connect();

const auth = require('./middlewares/auth');
//const errors = require('./middlewares/errors');
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000'
}));
//const unless = require('express-unless');

// auth.authenticateToken.unless = unless;
// app.use(
//     auth.authenticateToken.unless({
//         path: [
//             { url: '/users/login', methods: ['POST'] },
//             { url: '/users/register', methods: ['POST'] },
//         ]
//     })
// )
app.use(express.json());
//app.use('/users', require('./routes/user.routes'));
//app.use(errors.errorHandler)
app.use(express.urlencoded({ extended: true }));

const router = require('./routes/routes');

app.use('/api', router)


module.exports = app;