const { Pool } = require('pg');

const PG_URI = 'postgres://hiymgopt:wKpwrNMmy5aoJVzb1C9cncdWdkTExgNH@ziggy.db.elephantsql.com:5432/hiymgopt';

// creates a new pool using the connection URI
const pool = new Pool({
  connectionString: PG_URI
});

// exports an object with a method on it that makes queries to database
module.exports = {
  query: (text, params, callback) => {
    // console.log('Querying for: ', text);
    return pool.query(text, params, callback);
  }
};