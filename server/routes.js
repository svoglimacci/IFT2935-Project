import express from 'express';

const router = express.Router();

router.get('/users', async (req, res) => {
  try {
    const result = await req.pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
