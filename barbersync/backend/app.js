const express = require('express');
const bodyParser = require('body-parser');
const barberiasRoutes = require('./routes/barberiasRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api/barberias', barberiasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});