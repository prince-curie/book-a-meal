import express from 'express';
import dotenv from 'dotenv';
import mealRoutes from './routes/meal.route';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send({ data: 'Welcome to book-a-meal' }));

app.use('/api/v1/', mealRoutes);

const port = process.env.PORT;

app.listen(port, () => console.log('App is running.....'));

export default app;
