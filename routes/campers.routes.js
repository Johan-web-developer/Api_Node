const { MongoClient } = require('mongodb');
const express = require('express');
const router = express.Router();
const bases = process.env.DBBD;
require('dotenv').config();

router.get('/campers', async (req, res) => {
        try {
            const client = new MongoClient(bases, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();
            const db = client.db('Artemis');
            const collection = db.collection('campers');
            const results = await collection.find({}).toArray();
            res.json(results);

            client.close();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

router.post('/anadir_camper', async (req, res) => {
        const client = new MongoClient(bases, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        const db = client.db('Artemis');
        const collection = db.collection('campers'); 
        
        const newCamper = req.body; 
        
        try {
          const result = await collection.insertOne(newCamper);
          res.status(201).json({ message: 'Camper añadido con éxito', insertedId: result.insertedId });
        } catch (error) {
          res.status(500).json({ message: 'Error al añadir el camper', error: error.message });
        }
      });

      
router.delete('/eliminar_camper/:id', async (req, res) => {
        const client = new MongoClient(bases, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        const db = client.db('Artemis');
        const collection = db.collection('campers');
        const camperId = req.params.id;
      
        try {
          const result = await collection.deleteOne({ _id: ObjectId(camperId) });
          if (result.deletedCount === 1) {
            res.json({ message: 'Camper eliminado con éxito' });
          } else {
            res.status(404).json({ message: 'No se encontró el camper con el ID proporcionado' });
          }
        } catch (error) {
          res.status(500).json({ message: 'Error al eliminar el camper', error: error.message });
        }
      });     

module.exports = router;
