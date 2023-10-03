const { MongoClient, ObjectId } = require('mongodb');
const express = require('express');
const router = express.Router();
const bases = process.env.DBBD;
require('dotenv').config();


// Ruta para obtener todos los trainers
router.get('/todos_los_trainers', async (req, res) => {
    const client = new MongoClient(bases, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db = client.db('Artemis');
    const collection = db.collection('trainers');
  
    try {
      const results = await collection.find({}).toArray();
      res.json(results);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los trainers', error: error.message });
    }
  });
  
  // Ruta para obtener un trainer por su ID
  router.get('/trainers_id/:id', async (req, res) => {
    const client = new MongoClient(bases, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db = client.db('Artemis');
    const collection = db.collection('trainers');
    const trainerId = req.params.id;
  
    try {
      const result = await collection.findOne({ _id: new ObjectId(trainerId) });
  
      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ message: 'No se encontró el trainer con el ID proporcionado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el trainer', error: error.message });
    }
  });
  
  // Ruta para agregar un nuevo trainer
  router.post('/anadir_trainers', async (req, res) => {
    const client = new MongoClient(bases, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db = client.db('Artemis');
    const collection = db.collection('trainers');
  
    const newTrainer = req.body;
  
    try {
      const result = await collection.insertOne(newTrainer);
      res.json({ message: 'Trainer añadido con éxito', id: result.insertedId });
    } catch (error) {
      res.status(500).json({ message: 'Error al añadir el trainer', error: error.message });
    }
  });
  
  // Ruta para actualizar un trainer por su ID
  router.put('/actualizar_trainers/:id', async (req, res) => {
    const client = new MongoClient(bases, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db = client.db('Artemis');
    const collection = db.collection('trainers');
    const trainerId = req.params.id;
  
    const { nombre, especialidad, nivel, detalle, celular } = req.body;
  
    const updateTrainer = {
      $set: {
        nombre, especialidad, nivel, detalle, celular
      }
    };
  
    try {
      const result = await collection.updateOne({ _id: new ObjectId(trainerId) }, updateTrainer);
  
      if (result.modifiedCount === 1) {
        res.json({ message: 'Trainer actualizado con éxito' });
      } else {
        res.status(404).json({ message: 'No se encontró el trainer con el ID proporcionado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el trainer', error: error.message });
    }
  });
  
  // Ruta para eliminar un trainer por su ID
  router.delete('/eliminar_trainers/:id', async (req, res) => {
    const client = new MongoClient(bases, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db = client.db('Artemis');
    const collection = db.collection('trainers');
    const trainerId = req.params.id;
  
    try {
      const result = await collection.deleteOne({ _id: new ObjectId(trainerId) });
      if (result.deletedCount === 1) {
        res.json({ message: 'Trainer eliminado con éxito' });
      } else {
        res.status(404).json({ message: 'No se encontró el trainer con el ID proporcionado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el trainer', error: error.message });
    }
  });

module.exports = router;