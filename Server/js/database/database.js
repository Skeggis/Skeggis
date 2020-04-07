require('dotenv').config();
var {Client} = require('pg');

const db = require('./db')
const CONTACT_DB = process.env.CONTACT_DB

/**
 * 
 * @param {} param0 
 * @returns null if failed, else {name, email, subject}
 */
async function insertContactUs({name='', email='', subject=''}){
    const query = `insert into ${CONTACT_DB} (name, email, subject) VALUES ($1,$2,$3) returning *;`;
    const result = await db.query(query, [name, email, subject]);
    if(result && result.rows[0]){ return result.rows[0] }
    return null
}

module.exports = {insertContactUs}