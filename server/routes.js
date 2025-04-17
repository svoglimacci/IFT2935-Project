import express from 'express';
import { pool } from './db.js';

const router = express.Router();

router.get('/q1', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM livre');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/q2', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM adherent');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/q3', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM emprunt');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/q4', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM commande');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
