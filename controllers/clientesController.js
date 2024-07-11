const db = require('../db/db');
const multer = require('multer');
const path = require('path');

const getClientes = async (req, res) => 
    {
        const sql = 'SELECT * FROM clientes';
    
        db.query(sql, (err,result) => 
        {
            if(err) throw err;
    
            res.json(result);
        });
    }

const getClienteById = async (req, res) =>  {
    const { id } = req.params;
    
        const sql = 'SELECT * FROM usuarios WHERE id = ?';
    db.query(sql,[id], (err,result) =>
    {
        if(err) throw err;        
        res.json(result);
    });
};

const createCliente = async (req, res) => {
    const {nombre, apellido, telefono, email } = req.body;
    
        const sql = 'INSERT INTO clientes (nombre, apellido, telefono, email) VALUES (?, ?, ?, ?)';
        db.query(sql,[nombre,apellido,telefono,email], (err,result) =>
            {
                if(err) throw err;
        
        
                res.json({
                    message : 'cliente Creado',
                    idUsuario: result.insertId
                    });
            });
};

const updateCliente = async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, telefono, email } = req.body;
    
        const sql = 'UPDATE clientes SET nombre = ?, apellido = ?, telefono = ?, email = ? WHERE idCliente = ?';
        db.query(sql,[nombre,apellido,telefono,email,id], (err,result) =>
            {
                if(err) throw err;
        
        
                res.json(
                    {
                        message : 'cliente editado'
                    });
            });
        };
const deleteCliente = async (req, res) => {
    const { id } = req.params;

        const sql= 'DELETE FROM clientes WHERE idCliente = ?';
        db.query(sql,[id],(err,result) =>
            {
                if(err) throw err;
        
        
                res.json(
                    {
                        message: 'cliente eliminado'
                    });
            });
};

module.exports = {
    getClientes,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente
};