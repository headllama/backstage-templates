const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

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
  apis: ['./routes/*.js'], // Pasta onde estão definidos os endpoints da API
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Defina suas rotas da API abaixo (exemplo)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Olá, Mundo!' });
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
