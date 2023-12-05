import express from 'express'
import mysql from 'mysql2'

import registrationRouter from './routes/registrationRouter.js';
import verifcationRouter from './routes/verifcationRouter.js';
import loginRouter from './routes/loginRouter.js';
import userRouter from './routes/userRouter.js';

const connection = mysql.createConnection({
   port: 3306,
   host: 'localhost',
   user: 'root',
   password: 'lkji1122'
})

connection.connect((err) => {
   if(err) {
      throw err
   }
      console.log('MySQL works...')
})

const PORT = 8000;

const app = express();

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
   req.headers['content-type'] = 'application/json';
   next();
})

app.use(express.json())

app.use('/login', loginRouter)

app.use('/verification', verifcationRouter)

app.use('/registration', registrationRouter)

app.use('/user', userRouter)

app.listen(PORT, () => {
   console.log('server works...')
})

export default connection