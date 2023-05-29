const mysql = require("mysql");
const util = require("util");

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "taller_de_node_js_s_a__de_c_v_"
});

pool.query = util.promisify(pool.query);

module.exports = pool;