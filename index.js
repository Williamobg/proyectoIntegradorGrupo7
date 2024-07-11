
let port = 3000;
const express = require('express');
const app = express();
const path = require('path');// para trabajar con rutas de archivos y directorios
const clientesRouter = require('./routes/clientes');
const cors = require('cors');




app.use(cors());
app.use(express.json());
app.use('/clientes',clientesRouter);

app.use(express.static(path.join(__dirname,'public')));



app.use('/clientes', express.static(path.join(__dirname, 'usuarios')));

app.listen(port , () => 
{
    console.log(`Servidor ejecutandose en el puerto ${port}`)
});


