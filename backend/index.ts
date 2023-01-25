import express from 'express';
import { Application } from 'express';
import { Schema, model, connect } from 'mongoose';
import { cartTypes, milkTypes } from './types';
const cors = require('cors');
require('dotenv').config();

const app: Application = express();
app.use(express.json());
app.use(cors());

main().catch(err => console.log(err));

async function main() {
  
  await connect (`mongodb+srv://Eoghain:${process.env.PASS}@cluster0.sdqzzhz.mongodb.net/portfolio?retryWrites=true&w=majority`);

  const milkSchema = new Schema<milkTypes>({
    id: String,
    name: String,
    type: String,
    storage: Number,
  });

  const Milk = model("Milk", milkSchema);

  app.get("/api/milk", async (_req, res) => {
    try {
    const allMilk = await Milk.find();
    res
    .status(200)
    .json(allMilk);
  } catch (err) {
    res
    .status(400)
    .send({ message: err });
  }
  });

  app.get("/api/milk/:id", async (req, res) => {
    try {
    const { id } = req.params;
    const oneMilk = await Milk.findById(id);
    res
    .status(200)
    .json(oneMilk);
  } catch (err) {
    res
    .status(400)
    .send({ message: err });
    }
  });

  app.post("/api/milk", async (req, res) => {
    try {
    const newMilk = new Milk({ ...req.body });
    await newMilk.save();
    res
    .status(200)
    .json(newMilk);
  } catch (err) {
    res
    .status(400)
    .send({ message: err });
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

  const cartSchema = new Schema<cartTypes>({
    id: String,
    name: String,
    type: String,
    qty: Number,
  });

  const Milkcarts = model("Milkcart", cartSchema);

  app.get("/cart", async (_req, res) => {
    try {
    const allCarts = await Milkcarts.find();
    res.json(allCarts);
  } catch (err) {
    res
    .status(400)
    .send({ message: err });
  }
  });

  app.post("/cart", async (req, res) => {
    try {
    const newCart = new Milkcarts({ ...req.body });
    await newCart.save();
    res.json(newCart);
  } catch (err) {
    res
    .status(400)
    .send({ message: err });
  }
  });

  app.use((_req, res) => res.status(404).send('404 Not Found'));

}

export default app;
