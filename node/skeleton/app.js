import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';

const app = express();
const port = process.env.PORT || 3000;

// Swagger setup
const swaggerDefinition = {
  info: {
    title: 'API Swagger',
    version: '1.0.0',
    description: 'Documentação da API Swagger',
  },
  host: `localhost:${port}`,
  basePath: '/',
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', serve, setup(swaggerSpec));

// Defina suas rotas da API abaixo
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Olá, Mundo!' });
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
