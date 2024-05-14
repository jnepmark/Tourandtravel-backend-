const { Pool } = require("pg"); // Use object destructuring to extract Pool from pg

const pool = new Pool({  // Use 'Pool' instead of 'pool' for creating a new instance
    user: "postgres",
    host: "localhost",
    database: "travel",
    password: "123456@aA",
    port: 5432,
});

module.exports = pool; 
