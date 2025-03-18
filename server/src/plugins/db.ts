import { Pool } from "pg";

export default new Pool({
    user: 'postgres',
    password: '12345',
    host: 'localhost',
    port: 5432,
    database: 'webpage',
});
