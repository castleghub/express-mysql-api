import {createPool} from 'mysql2/promise' 
import {DB_HOST,DB_PORT,DB_DATABASE,DB_USER,DB_PASSWD} from './config.js'

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWD,
    database: DB_DATABASE,
    port:DB_PORT
    
})