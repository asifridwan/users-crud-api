import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/router.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    console.log('Created by Asif Ridwan !');
    res.send('Hello There ! Use the /users route to access all the users !');
});

app.listen(PORT, () => console.log(`Server up and running at http://localhost:${PORT}/`));