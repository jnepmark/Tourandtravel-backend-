const pool = require('../../db');
const queries =require('./queries');
// const cloudinary = require('../Utils/cloudinary');
const getdestinations= (req,res) => {
    pool.query(queries.getdestinations, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}; 

const getDestinationById=(req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getdestinationById,[id],(error,results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getPlacesByDestination= (req, res) => {
    const { title } = req.params;
    
    pool.query(queries.getplacesbydestination, [title], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};


const getAllPlaces = (req, res) => {
    pool.query(queries.getallplaces, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'An unexpected error occurred' });
        } else {
            res.status(200).json(results.rows);
        }
    });
};

const createBooking = (req, res) => {
  const { firstName, lastName, email, phone, fromDate, toDate,
    adultsCount, childrenCount, moreDetails } = req.body;

  pool.query(queries.createBooking,
    [firstName, lastName,email ,phone ,fromDate ,toDate ,
      adultsCount ,childrenCount,moreDetails], 
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({ error: 'An unexpected error occurred while creating booking' });
        } else {
          res.status(201).send('Booking created successfully');
        }
      }
  );
};



module.exports = {
    getdestinations,
   getDestinationById,
   getPlacesByDestination,
   getAllPlaces,
   createBooking,
   
};