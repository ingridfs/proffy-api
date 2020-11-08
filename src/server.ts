import express from 'express';

const app = express();

app.use(express.json())
app.get('/', (request, response) => {

  const users = [
    {name: 'Ingrid', age: 25}
  ]
  return response.json(users);
});

app.post('/users', (request, response) => {
  console.log(request.body)
  const users = [
    {name: 'Ingrid', age: 25}
  ]
  return response.json(users);
})

app.listen(3333);