import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    database: process.env.DB_NAME,
    options: {
        encrypt: true, // for Azure SQL
        enableArithAbort: true
    }
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Conexión exitosa a la base de datos SQL de Azure');
        return pool;
    })
    .catch(err => {
        console.error('Error en la conexión a la base de datos:', err);
        throw err;
    });

export { sql, poolPromise };