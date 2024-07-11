CREATE DATABASE IF NOT EXISTS mildeliciasdb;
USE mildeliciasdb;
CREATE TABLE productos (
    idProducto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    descripcion TEXT,
    precio FLOAT NOT NULL,
    categoria VARCHAR(30) NOT NULL
);

CREATE TABLE clientes(
    idCliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    telefono VARCHAR(10),
    email VARCHAR(50) NOT NULL
);

CREATE TABLE pedidos (
    idPedido INT AUTO_INCREMENT PRIMARY KEY,
    idCliente INT,
    fechaPedido DATETIME NOT NULL,
    estado VARCHAR(20) NOT NULL,
    FOREIGN KEY (idCliente) REFERENCES clientes(idCliente)
);

CREATE TABLE detallespedidos (
    idDetalle INT AUTO_INCREMENT PRIMARY KEY,
    idPedido INT,
    idProducto INT,
    cantidad INT NOT NULL,
    precioUnitario FLOAT NOT NULL,
    FOREIGN KEY (idPedido) REFERENCES pedidos(idPedido),
    FOREIGN KEY (idProducto) REFERENCES productos(idProducto)
);

CREATE TABLE facturas (
    idFactura INT AUTO_INCREMENT PRIMARY KEY,
    idPedido INT,
    precioTotal FLOAT NOT NULL,
    fechaFactura DATETIME,
    FOREIGN KEY (idPedido) REFERENCES pedidos(idPedido)
);

INSERT INTO productos (nombre, descripcion, precio, categoria) VALUES
('Croissant', 'Crujiente croissant francés', 1.500, 'Panadería'),
('Medialuna', 'Medialuna dulce tradicional', 1.900, 'Panadería'),
('Pan Integral', 'Pan integral con semillas', 2.900, 'Panadería'),
('Tarta de Manzana', 'Tarta de manzana casera', 3.500, 'Pastelería'),
('Brownie', 'Brownie de chocolate con nueces', 2.850, 'Pastelería'),
('Bizcocho', 'Bizcocho de vainilla', 1.750, 'Pastelería'),
('Churro', 'Churro relleno de dulce de leche', 1.925, 'Panadería'),
('Pan de Chocolate', 'Pan con trozos de chocolate', 2.900, 'Panadería'),
('Muffin', 'Muffin de arándanos', 2.250, 'Pastelería'),
('Cupcake', 'Cupcake de vainilla con frosting', 2.975, 'Pastelería');


INSERT INTO clientes (nombre, apellido, telefono, email) VALUES
('Juan', 'Pérez', '1234567890', 'juan.perez@example.com'),
('María', 'González', '0987654321', 'maria.gonzalez@example.com'),
('Carlos', 'López', '1122334455', 'carlos.lopez@example.com'),
('Ana', 'Martínez', '2233445566', 'ana.martinez@example.com'),
('Luis', 'Fernández', '3344556677', 'luis.fernandez@example.com'),
('Sofía', 'Rodríguez', '4455667788', 'sofia.rodriguez@example.com'),
('Pedro', 'Sánchez', '5566778899', 'pedro.sanchez@example.com'),
('Laura', 'Hernández', '6677889900', 'laura.hernandez@example.com'),
('Jorge', 'Ramírez', '7788990011', 'jorge.ramirez@example.com'),
('Lucía', 'Torres', '8899001122', 'lucia.torres@example.com');


INSERT INTO pedidos (idcliente, fechaPedido, estado) VALUES
(1, '2024-07-01 10:00:00', 'Completado'),
(2, '2024-07-02 11:30:00', 'Pendiente'),
(3, '2024-07-03 14:15:00', 'Completado'),
(4, '2024-07-04 16:00:00', 'Pendiente'),
(5, '2024-07-05 09:45:00', 'Completado'),
(6, '2024-07-06 12:00:00', 'Completado'),
(7, '2024-07-07 13:30:00', 'Pendiente'),
(8, '2024-07-08 15:00:00', 'Completado'),
(9, '2024-07-09 10:45:00', 'Pendiente'),
(10, '2024-07-10 11:00:00', 'Completado');


INSERT INTO detallespedidos (idpedido, idproducto, cantidad, precioUnitario) VALUES
(1, 1, 2, 1.5),
(1, 2, 3, 1.0),
(2, 3, 1, 2.0),
(2, 4, 2, 3.5),
(3, 5, 4, 2.5),
(3, 6, 2, 1.75),
(4, 7, 3, 1.25),
(4, 8, 1, 2.0),
(5, 9, 5, 2.25),
(5, 10, 2, 2.75);


INSERT INTO facturas (idpedido, precioTotal, fechaFactura) VALUES
(1, 8.5, '2024-07-01 10:05:00'),
(2, 11.0, '2024-07-02 11:35:00'),
(3, 15.0, '2024-07-03 14:20:00'),
(4, 7.25, '2024-07-04 16:05:00'),
(5, 13.25, '2024-07-05 09:50:00');


