const express = require('express')
const router = express.Router();
const Menu = require('./../models/menu');

router.post('/', async (req, res) => {
    try {
        const menu = Menu(req.body);
        menu.save();
        res.status(201).json(menu);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
})

router.get('/', async (req, res) => {
    try {
        const menu = await Menu.find();
        res.status(200).json(menu);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
)
router.get('/:taste', async (req, res) => {
    try {
        const taste = req.params.taste;
        const menu = await Menu.find({ taste: taste });
        res.status(200).json(menu);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
})





module.exports = router;