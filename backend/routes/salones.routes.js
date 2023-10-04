const { MongoClient, ObjectId } = require('mongodb');
const express = require('express');
const router = express.Router();
const bases = process.env.DBBD;
require('dotenv').config();


router.get('/obtain_salones', async (req, res) => {
    const client = new MongoClient(bases, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db = client.db('Artemis');
    const collection = db.collection('salones');
    const salones = await collection.find({}).toArray();
    res.json(salones);
  });

router.post('/anadir_salon', async (req, res) => {
  try {
    const client = new MongoClient(bases);
    await client.connect();
    const db = client.db('Artemis');
    const collection = db.collection('salones');
    const newSalon = req.body;
    const result = await collection.insertOne(newSalon);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error al procesar la solicitud' });
  }  
  });

router.put('/actualizar_salon/:id', async (req, res) => {
    const client = new MongoClient(bases, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db = client.db('Artemis');
    const collection = db.collection('salones');
    const salonId = new ObjectId(req.params.id);
    const updatedSalon = req.body;
  
    const result = await collection.updateOne(
      { _id: salonId },
      { $set: updatedSalon }
    ); if (result.modifiedCount === 1) {
        res.json({ message: 'Salón actualizado con éxito' });
      } else {
        res.status(404).json({ message: 'No se encontró el salón con el ID proporcionado' });
      }
    });

router.delete('/eliminar_salon/:id', async (req, res) => {
        const client = new MongoClient(bases, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        const db = client.db('Artemis');
        const collection = db.collection('salones');
        const salonId = new ObjectId(req.params.id);
      
        const result = await collection.deleteOne({ _id: salonId });
      
        if (result.deletedCount === 1) {
          res.json({ message: 'Salón eliminado con éxito' });
        } else {
          res.status(404).json({ message: 'No se encontró el salón con el ID proporcionado' });
        }
      });


module.exports = router;    