import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

app.get('/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      title: 'A todo list',
      description: "Hey, It's a good old todo list",
      details:
        'A todo list is an application where user can list his/her tasks, mark them as in progress or complete',
    },
    {
      id: 2,
      title: 'A Travellers forum',
      description: "Hey, It's a forum application for Travellors",
      details:
        'Users can share their travel experiences and engage with other travellors and the discussions',
    },
  ];
  res.header('Content-Type', 'application/json');
  res.status(200).json(projects);
});
