import pg from "pg"
import dotenv from "dotenv"

dotenv.config()
const { Pool} = pg

const user = 'postgres';
const password = '842867';
const host = 'localhost';
const port = 5432;
const database = 'la_boleria';

const connection = new Pool({
  user,
  password,
  host,
  port,
  database
});

// const databaseConfig = {
//   connectionString: process.env.DATABASE_URL
// }

// const connection = new Pool(databaseConfig)

export default connection