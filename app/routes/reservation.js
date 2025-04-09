// reservation.js
const express = require('express');
const router = express.Router();
const db = require('../services/db');

// Get all reservations for a user
router.get('/my-reservations', async (req, res) => {
    try {
        const { userId } = req.user;
        const query = `
            SELECT r.*, i.name as food_name, i.expiry_date 
            FROM reservations r
            JOIN inventory i ON r.food_id = i.id
            WHERE r.user_id = ?
        `;
        const results = await db.query(query, [userId]);
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a new reservation
router.post('/create', async (req, res) => {
    try {
        const { userId } = req.user;
        const { food_id, quantity, pickup_time } = req.body;
        
        // Check if food is available
        const checkQuery = 'SELECT quantity FROM inventory WHERE id = ?';
        const [food] = await db.query(checkQuery, [food_id]);
        
        if (!food || food.quantity < quantity) {
            return res.status(400).json({ error: 'Not enough quantity available' });
        }

        const query = `
            INSERT INTO reservations (user_id, food_id, quantity, pickup_time, status) 
            VALUES (?, ?, ?, ?, 'pending')
        `;
        const result = await db.query(query, [userId, food_id, quantity, pickup_time]);
        
        // Update inventory
        const updateQuery = 'UPDATE inventory SET quantity = quantity - ? WHERE id = ?';
        await db.query(updateQuery, [quantity, food_id]);
        
        res.json({ id: result.insertId, message: 'Reservation created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Cancel a reservation
router.delete('/cancel/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.user;
        
        // Get reservation details
        const getQuery = 'SELECT * FROM reservations WHERE id = ? AND user_id = ?';
        const [reservation] = await db.query(getQuery, [id, userId]);
        
        if (!reservation) {
            return res.status(404).json({ error: 'Reservation not found' });
        }

        // Update inventory
        const updateQuery = 'UPDATE inventory SET quantity = quantity + ? WHERE id = ?';
        await db.query(updateQuery, [reservation.quantity, reservation.food_id]);
        
        // Delete reservation
        const deleteQuery = 'DELETE FROM reservations WHERE id = ?';
        await db.query(deleteQuery, [id]);
        
        res.json({ message: 'Reservation cancelled successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router; 