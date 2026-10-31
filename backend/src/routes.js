const express = require('express');
const { pool } = require('./db');

const router = express.Router();

router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM books ORDER BY id');
  res.json(result.rows);
});

router.get('/:id', async (req, res) => {
  const result = await pool.query('SELECT * FROM books WHERE id = $1', [req.params.id]);
  if (result.rows.length === 0) {
    return res.status(404).json({ error: 'Book not found' });
  }
  res.json(result.rows[0]);
});

router.post('/', async (req, res) => {
  const { title, author, year } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'title and author are required' });
  }
  const result = await pool.query(
    'INSERT INTO books (title, author, year) VALUES ($1, $2, $3) RETURNING *',
    [title, author, year ?? null]
  );
  res.status(201).json(result.rows[0]);
});

router.put('/:id', async (req, res) => {
  const { title, author, year } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'title and author are required' });
  }
  const result = await pool.query(
    'UPDATE books SET title = $1, author = $2, year = $3 WHERE id = $4 RETURNING *',
    [title, author, year ?? null, req.params.id]
  );
  if (result.rows.length === 0) {
    return res.status(404).json({ error: 'Book not found' });
  }
  res.json(result.rows[0]);
});

router.delete('/:id', async (req, res) => {
  const result = await pool.query('DELETE FROM books WHERE id = $1 RETURNING *', [req.params.id]);
  if (result.rows.length === 0) {
    return res.status(404).json({ error: 'Book not found' });
  }
  res.status(204).send();
});

module.exports = router;
