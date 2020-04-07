/**
 * This module is responsible for setting up the database by
 * running all the sql scripts.
 */


require('dotenv').config();

const fs = require('fs');
const util = require('util');

const { query } = require('./db');
const readFileAsync = util.promisify(fs.readFile);

const {
    CONTACT_DB
} = process.env
const connectionString = process.env.DATABASE_URL

/**
 * Run all the sql scripts.
 */
async function main() {
  console.info(`Initializing database on ${connectionString}`);

  await query(`DROP TABLE IF EXISTS 
  ${CONTACT_DB}`);
  console.info('Tables deleted');

  // create tables from schemas
  try {
    const contact = await readFileAsync('./sql/contact.sql');
    await query(contact.toString('utf8'));
    console.info('Tables created');
  } catch (e) {
    console.error('Error creating tables:', e.message);
    return;
  }
}


main().catch((err) => {
  console.error(err);
});
