import express from 'express';
import { pool } from './db.js';
import fs from 'fs';

const router = express.Router();

var q1 = fs.readFileSync('../q1.sql').toString();
var q2 = fs.readFileSync('../q2.sql').toString();
var q3 = fs.readFileSync('../q3.sql').toString();
var q4 = fs.readFileSync('../q4.sql').toString();

router.get('/q1', async (req, res) => {
  try {
    const result = await pool.query(q1);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/q2', async (req, res) => {
  try {
    const result = await pool.query(q2);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/q3', async (req, res) => {
  try {
    const result = await pool.query(q3);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/q4', async (req, res) => {
  try {
    const result = await pool.query(q4);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
