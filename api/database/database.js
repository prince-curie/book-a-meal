import Sequelize from 'sequelize';

const database = new Sequelize('bookmeal', 'Chibuike', 'pass', {
  host: 'localhost',
  dialect: 'postgres',
});

database
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

export default database;
