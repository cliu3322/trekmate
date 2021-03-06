const express = require('express');
const accommodationRouter = express.Router();

//Bookshelf data models
const Accommodations = require('../db/models/Accommodations.js');

//GET all accommodations in database
accommodationRouter.get('/', (req, res) => {
    Accommodations
        .forge()
        .orderBy('id', 'ASC')
        .fetchAll()
        .then(accommodationsList => {
            res.json(accommodationsList.serialize())
        })
        .catch(err => {
            console.log("\nGET - getting accommodation list error", err);
            res.json("GET - getting accommodation list error");
        })
})
//GET accommodation by id 
accommodationRouter.get('/:id', (req, res) => {
    const { id } = req.params;

    Accommodations
        .where({ id })
        .fetchAll()
        .then((accommodation) => {
            res.json(accommodation.serialize())
        })
        .catch(err => {
            console.log("\nGET - getting accommodation by id error", err);
            res.json("GET - getting accommodation by id error");
        })
})

//GET accommodation by user_id 
accommodationRouter.get('/user/:user_id', (req, res) => {
    const { user_id } = req.params;

    Accommodations
        .forge()
        .where({ user_id })
        .orderBy('id', 'ASC')
        .fetchAll()
        .then((accommodation) => {
            res.json(accommodation.serialize())
        })
        .catch(err => {
            console.log("\nGET - getting accommodation by user_id error", err);
            res.json("GET - getting accommodation by user_id error");
        })
})

//GET accommodations by trip_id
accommodationRouter.get('/trip/:trip_id', (req, res) => {
    const { trip_id } = req.params;

    Accommodations
        .forge()
        .where({ trip_id })
        .orderBy('check_in_date', 'ASC')
        .fetchAll()
        .then((filteredAccommodations => {
            res.json(filteredAccommodations.serialize())
        }))
        .catch(err => {
            console.log("\nGET - get accommodations by trip_id error", err);
            res.json("GET - get accommodations by trip_id error");
        })
})

//POST new Accommodation into 'Accommodations' table
accommodationRouter.post('/add', (req, res) => {
    const newAccommodation = {
        lodging_name: req.body.lodging_name,
        address: req.body.address,
        check_in_date: req.body.check_in_date,
        check_out_date: req.body.check_out_date,
        price: req.body.price,
        is_paid: req.body.is_paid,
        reservation_code: req.body.reservation_code,
        notes: req.body.notes,
        user_id: req.body.user_id,
        trip_id: req.body.trip_id
    }

    Accommodations
        .forge(newAccommodation)
        .save()
        .then(() => {
            return Accommodations.fetchAll()
        })
        .then(accommodations => {
            res.json(accommodations.serialize());
        })
        .catch(err => {
            console.log("\nPOST - adding new accommodation error", err);
            res.json("POST - adding new accommodation error");
        })
});

//PUT - edit accommodation by accommodation id
accommodationRouter.put('/edit/:id', (req, res) => {

    const { id } = req.params;
    console.log("id here??:", id);

    const updatedAccommodation = {
        lodging_name: req.body.lodging_name,
        address: req.body.address,
        check_in_date: req.body.check_in_date,
        check_out_date: req.body.check_out_date,
        price: req.body.price,
        is_paid: req.body.is_paid,
        reservation_code: req.body.reservation_code,
        notes: req.body.notes,
        user_id: req.body.user_id,
        trip_id: req.body.trip_id
    }
    console.log("updatedAccommodation??", updatedAccommodation);

    Accommodations
        .where({ id })
        .fetch()
        .then((currentAcccommodation) => {
            return currentAcccommodation.save(updatedAccommodation);
        })
        .then((result) => {
            console.log('Updated accommodation:', result);
            res.json(result);
        })
        .catch(err => {
            console.log("\nPUT - edit accommodation error", err);
            res.json("PUT - edit accommodation error");
        })
})

//DELETE - accommodation by 'id' from the 'accommodation' table
accommodationRouter.delete('/delete/:id', (req, res) => {
    const { id } = req.params;

    Accommodations
        .where({ id })
        .destroy()
        .then(
            res.json('Accommodation was deleted')
        )
        .catch(err => {
            console.log("\nDELETE - delete accommodation error", err);
            res.json("DELETE - delete accommodation error");
        })
})

module.exports = accommodationRouter