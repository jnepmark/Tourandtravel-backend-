const {Router}= require ('express');
const controller= require('./controller');


const router = Router();
router.get("/",controller.getdestinations);
router.get("/:id",controller.getDestinationById);
router.get('/places/:title', controller.getPlacesByDestination); // New route for getting places by destination
router.get('/all-places', controller.getAllPlaces);// New route for getting all places
router.post('/bookings', controller.createBooking);
// router.post('/create-booking', controller.createBooking);

module.exports = router;