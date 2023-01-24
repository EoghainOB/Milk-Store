import express from 'express';
import { Request, Response, Application } from 'express';
import { milks } from './db';
import { milkTypes } from './types';
const cors = require('cors');

const app: Application = express();

app.use(express.json());

app.use(cors());

app.get('/', (_req: Request, res: Response) => {
  res.send('Express + Hello Server');
});

app.get('/api/milk', (_req: Request, res: Response) => {
  res.send(milks);
});

app.get('/api/milk/:id', (req: Request<{id: string}>, res: Response<{}, {milk: milkTypes}>) => {
  if (milks.some(index => index.id == req.params.id) === false) {
    res
    .send({ message: 'Error - Invalid id' });
    return;
  }
  try {
  const milk = milks.find(index => index.id == req.params.id);
  res
    .status(200)
    .send(milk);
  } catch (err) {
    res
    .status(400)
    .send({ message: err });
  }
});

app.post('/api/milk/', (req: Request, res: Response) : void => {
  if (milks.some(index => index.id == req.body.id)) {
    res
    .send({ message: 'Error - Please enter unique id' });
    return;
  }
  try {
  const milk: milkTypes = req.body
  milks.push(milk);
  res
    .status(201)
    .json(milks);
  }
  catch (err) {
    res
    .status(400)
  }
});

// app.put('/api/milk/:id', (req: Request<{id: string}>, res: Response<{}, {updatedMilk: milkTypes}>) => {
//   if (milks.some(index => index.id == req.params.id) === false) {
//     res
//     .status(400)
//     .send({ message: 'Error - Invalid id' });
//     return;
//   }
//   try {
//   const newData: milkTypes = req.body;
//   const id = req.params.id;
//   const findMilk = milks.find((index) => index.id == req.params.id);
//   const updatedMilk = {...findMilk, ...newData};
//   milks.splice(id, 1, updatedMilk);
//   res
//     .status(201)
//     .json(updatedMilk);
//   }
//   catch (err) {
//     res
//     .status(400)
//   }
// });

app.delete('/api/milk/:id', (req: Request<{id: string}>, res: Response) => {
  if (milks.some(index => index.id == req.params.id) === false) {
    res
    .send({ message: 'Error - Invalid id' });
    return;
  }
  try {
  const milkDel = milks.findIndex(({ id }) => id == req.params.id);
    if (milkDel >= 0) {
    milks.splice(milkDel, 1);
    }
  res
    .sendStatus(200);
  } catch (err) {
    res
    .status(400)
    .send('Error - Invalid id');
  }
});

app.use((_req, res) => res.status(404).send('404 Not Found'));

export default app;