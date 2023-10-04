const { MongoClient, ObjectId } = require('mongodb');
const express = require('express');
const router = express.Router();
const bases = process.env.DBBD;
require('dotenv').config();

router.get('/obtain_equipos', async (req, res) => {
  const client = new MongoClient(bases, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  const db = client.db('Artemis');
  const collection = db.collection('equipos_computo');
  const equipos = await collection.find({}).toArray();
  res.json(equipos);
});

router.post('/anadir_equipo', async (req, res) => {
    const client = new MongoClient(bases, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db = client.db('Artemis');
    const collection = db.collection('equipos_computo');
    const nuevoEquipo = req.body;
    const result = await collection.insertOne(nuevoEquipo);
    res.json(result);
  });
  
router.put('/actualizar_equipo/:id', async (req, res) => {
    const client = new MongoClient(bases, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db = client.db('Artemis');
    const collection = db.collection('equipos_computo');
    const equipoId = new ObjectId(req.params.id)
    const updatedEquipo = req.body;
  
    const result = await collection.updateOne(
        { _id: equipoId },
        { $set: updatedEquipo }
      );
  
    if (result.modifiedCount === 1) {
      res.json({ message: 'Equipo actualizado con éxito' });
    } else {
      res.status(404).json({ message: 'No se encontró el equipo con el ID proporcionado' });
    }
  });
  
router.delete('/eliminar_equipo/:id', async (req, res) => {
    const client = new MongoClient(bases, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db = client.db('Artemis');
    const collection = db.collection('equipos_computo');
    const equipoId = new ObjectId(req.params.id)
    const result = await collection.deleteOne(
        { _id: equipoId },
      );
  
    if (result.deletedCount === 1) {
      res.json({ message: 'Equipo eliminado con éxito' });
    } else {
      res.status(404).json({ message: 'No se encontró el equipo con el ID proporcionado' });
    }
  });
  


module.exports = router;
