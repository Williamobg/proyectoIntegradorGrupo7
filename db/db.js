const mySql = require('mysql');

const connection = mySql.createConnection(
    {
        host : 'localhost',
        user: 'root',
        password : '123456',
        database: 'mildeliciasdb'
    });


    connection.connect((err) => 
    {
        if(err)
        {
            console.error("ERROR conectando a la base de datos", err);
            return;
        }

        console.log("Conectado EXITOSAMENTE a la base de datos");

    });


module.exports = connection;