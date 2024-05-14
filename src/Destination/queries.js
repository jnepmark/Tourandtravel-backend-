const getdestinations = "SELECT * FROM destinations";
const getdestinationById = "SELECT * FROM destinations WHERE id = $1";
const getplacesbydestination = "SELECT * FROM places WHERE location_id = (SELECT id FROM destinations WHERE title = $1)";
const getallplaces = "SELECT * FROM places";
const createBooking = "INSERT INTO bookings (first_name,last_name,email," +
  "phone ,from_date,to_date," +
  "adults_count ,children_count" +
  "more_details ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)";

module.exports = {
    getdestinations,
    getdestinationById,
    getplacesbydestination,
    getallplaces,
    createBooking
};