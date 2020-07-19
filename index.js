import express from 'express';
import dotenv from 'dotenv';
// import mealRoutes from './routes/meal.route';
// import menuRoutes from './routes/menu.route';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send({ data: 'Welcome to book-a-meal' }));

// app.use('/api/v1/', mealRoutes);
// app.use('/api/v1/', menuRoutes);

const port = process.env.PORT;

app.listen(port, () => console.log('App is running on port', port));

export default app;
