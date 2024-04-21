const mysql = require('mysql2');


const pool = mysql.createPool({
    host: 'sql3.freesqldatabase.com',
    user: 'sql3700853',
    password: 'dr45rZMbf3',
    database: 'sql3700853',
    port: 3306
});

module.exports = pool;