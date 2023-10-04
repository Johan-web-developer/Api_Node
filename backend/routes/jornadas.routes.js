const { MongoClient, ObjectId } = require('mongodb');
const express = require('express');
const router = express.Router();
const bases = process.env.DBBD;
require('dotenv').config();

router.get('/todas_las_jornadas', async (req, res) => {
  try {
    const client = new MongoClient(bases, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  const db = client.db('Artemis');
  const collection = db.collection('jornadas');
  const results = await collection.find({}).toArray();
  res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la jornada' });
  }
  
});

router.post('/anadir_jornada', async (req, res) => {
  try {
    const client = new MongoClient(bases, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  const db = client.db('Artemis');
  const collection = db.collection('jornadas');
  const newJornada = req.body;
  const result = await collection.insertOne(newJornada);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error al añadir la jornada' });
  }
});

router.put('/actualizar_jornada/:id', async (req, res) => {
  try {
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
  res.json(result);
  } catch (error) {
    res.status(404).json({ message: 'No se encontró la jornada con el ID proporcionado' });
  }
});

router.delete('/eliminar_jornada/:id', async (req, res) => {
  try { 
    const client = new MongoClient(bases, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db = client.db('Artemis');
    const collection = db.collection('jornadas');
    const jornadaId = req.params.id;
    const result = await collection.deleteOne({ _id: ObjectId(jornadaId) });
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: 'No se encontró la jornada con el ID proporcionado' });
  }
});

module.exports = router;
