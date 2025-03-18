import fastify from "fastify";
import pool from "./plugins/db";
import cors from '@fastify/cors'

type TypeCreate = {
  title: string,
  description: string,
}

const server = fastify({ 
  logger: true
});

server.register(cors, {
  origin: 'http://localhost:8070',
  methods: ['POST', 'GET'],
});

server.get('/cards', async (request, reply) => {
  try {
    const { rows } = await pool.query(`SELECT * FROM cards`);
    console.log(rows);
    return rows;
  } catch (err) {
    console.log('----')
  }
})

server.post<{ Body: TypeCreate }>('/create', async (request, reply) => {
  try {
    const { title, description } = request.body;

    await pool.query(
      `INSERT INTO cards (title, description) VALUES ($1, $2)`,
      [title, description]
    );

    reply.status(201).send({ message: 'Данные успешно сохранены' });
  } catch (err) {
    console.error('Ошибка:', err);
    reply.status(500).send({ error: 'Ошибка при сохранении данных' });
  }
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})