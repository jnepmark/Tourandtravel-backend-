const express = require("express");
const cors = require('cors');

const destinationRoutes = require("./src/Destination/routes");
const app = express();
app.use(cors());
const port  =3000;

app.use(express.json());
app.get("/", (req,res)=> {res.send("Hello There!");});

app.use("/api/v1/destinations", destinationRoutes);
app.listen(port, () =>console.log(`Server is running on port ${port}`))