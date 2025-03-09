import fastify from "fastify";
import pool from "./plugins/db";

const server = fastify({ 
  logger: true
});

server.get('/products', async (request, reply) => {
  try {
    const { rows } = await pool.query(`SELECT * FROM products`);
    console.log(rows);
    return rows;
  } catch (err) {
    console.log('----')
  }
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})