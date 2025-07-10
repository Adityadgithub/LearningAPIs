const express = require('express');
const router = express.Router();
const Person = require('./../models/person');
router.post('/', async (req, res) => {
    try {
        const person = new Person(req.body);
        await person.save();
        res.status(201).json(person);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const person = await Person.find();
        res.send(person);
    } catch (error) {
        res.send(error);
    }
})


router.get('/:work', async (req, res) => {
    try {
        const work = req.params.work;
        const person = await Person.find({ work: work });
        res.send(person);
    } catch (error) {
        res.send(error);
    }
})


router.put('/:id', async(req, res) => {
    // --- ADD THIS LINE ---
    console.log('Request Body:', req.body); 

    try {
        const docId = req.params.id;
        const updatedvalue = req.body;
        
        const updatedDoc = await Person.findByIdAndUpdate(
            docId, 
            { $set: updatedvalue },
            { new: true, runValidators: true }
        );

        // --- AND ADD THIS LINE ---
        console.log('Updated Document:', updatedDoc);

        if (!updatedDoc) {
            return res.status(404).json({ message: 'No document found with this id' });
        }

        res.status(200).json(updatedDoc);
    }
    catch(error) {
        // --- AND THIS LINE TO SEE ERRORS ---
        console.error('Error during update:', error);
        res.status(500).json({ error: error.message });
    }
})

module.exports = router