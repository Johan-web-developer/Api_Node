const { MongoClient, ObjectId } = require('mongodb');
const express = require('express');
const router = express.Router();
const bases = process.env.DBBD;
require('dotenv').config();

router.get('/', async (req, res) => {
  const client = new MongoClient(bases, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  const db = client.db('Artemis');
  const collection = db.collection('jornadas');
  const results = await collection.find({}).toArray();
  res.json(results);
});

router.post('/', async (req, res) => {
  const client = new MongoClient(bases, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  const db = client.db('Artemis');
  const collection = db.collection('jornadas');
  const newJornada = req.body;

  const result = await collection.insertOne(newJornada);

  if (result.insertedCount === 1) {
    res.json({ message: 'Jornada añadida con éxito' });
  } else {
    res.status(500).json({ message: 'Error al añadir la jornada' });
  }
});

router.put('/:id', async (req, res) => {
  const client = new MongoClient(bases, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  const db = client.db('Artemis');
  const collection = db.collection('jornadas');
  const jornadaId = req.params.id;
  const updatedJornada = req.body;

  const result = await collection.updateOne(
    { _id: ObjectId(jornadaId) },
    { $set: updatedJornada }
  );

  if (result.modifiedCount === 1) {
    res.json({ message: 'Jornada actualizada con éxito' });
  } else {
    res.status(404).json({ message: 'No se encontró la jornada con el ID proporcionado' });
  }
});

router.delete('/:id', async (req, res) => {
  const client = new MongoClient(bases, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  const db = client.db('Artemis');
  const collection = db.collection('jornadas');
  const jornadaId = req.params.id;

  const result = await collection.deleteOne({ _id: ObjectId(jornadaId) });

  if (result.deletedCount === 1) {
    res.json({ message: 'Jornada eliminada con éxito' });
  } else {
    res.status(404).json({ message: 'No se encontró la jornada con el ID proporcionado' });
  }
});

module.exports = router;
