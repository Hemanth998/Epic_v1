import express from 'express';
import pg from 'pg';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

const { Pool } = pg;

const pool = new Pool({
  user: 'postgres',
  password: 'epicGTApg',
  host: 'localhost',
  port: 5433,
  database: 'epic',
});

app.get('/projects', async (req, res) => {
  const projects = (await pool.query('Select * from projects')).rows;

  res.header('Content-Type', 'application/json');
  res.status(200).json(projects);
});
