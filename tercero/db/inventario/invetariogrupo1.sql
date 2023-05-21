
-- SCHEMA: public

-- DROP SCHEMA IF EXISTS public ;

--Creacion de tablas
CREATE TABLE categoria (
	id_cat SERIAL PRIMARY KEY NOT NULL,
	nombre_cat VARCHAR(50)
);
CREATE TABLE proveedor(
	id_prov SERIAL PRIMARY KEY NOT NULL,
	nombre_prov VARCHAR(50)
);
CREATE TABLE empleado(
	cedula VARCHAR(10) primary key NOT NULL,
	nombres VARCHAR(50) NOT NULL,
	apellidos VARCHAR(50) NOT NULL,
	direccion VARCHAR(50) NOT NULL,
	telefono INTEGER,
	email VARCHAR(50),
	contraseña VARCHAR(50)
);
CREATE TABLE factura_compra(
	num_factura SERIAL PRIMARY KEY NOT NULL,
	id_prov INTEGER,
	CONSTRAINT fk_id_prov FOREIGN KEY(id_prov) REFERENCES proveedor(id_prov)
);
CREATE TABLE inventario(
	id_inv_prod SERIAL PRIMARY KEY NOT NULL,
	id_cat INTEGER NOT NULL,
	id_fac_compr INTEGER NOT NULL,
	CONSTRAINT fk_cat FOREIGN KEY (id_cat) REFERENCES categoria(id_cat),
	CONSTRAINT fk_fac_comp FOREIGN KEY (id_fac_compr) REFERENCES factura_compra(num_factura)
);

-- Modificacion de inventario
ALTER TABLE inventario add cedula VARCHAR(10) NOT NULL;
ALTER TABLE inventario add CONSTRAINT fk_empleado FOREIGN KEY (cedula) REFERENCES empleado (cedula);
ALTER TABLE inventario.inventario add nom_prod VARCHAR(50) NOT NULL;
ALTER TABLE inventario.inventario add cant_prod INTEGER NOT NULL;
ALTER TABLE inventario.inventario add precio_compra FLOAT NOT NULL;
ALTER TABLE inventario.inventario add precio_venta FLOAT NOT NULL;
ALTER TABLE inventario.inventario add estado VARCHAR(20) NOT NULL;

-- Modificacion proveedor
ALTER TABLE inventario.proveedor add direccion_prov VARCHAR(50) NOT NULL;
ALTER TABLE inventario.proveedor add correo_prov VARCHAR(50) NOT NULL;
ALTER TABLE inventario.proveedor add celu_prov VARCHAR(10) NOT NULL;

-- Modificacion factura compra

ALTER TABLE inventario.factura_compra add fecha_compra DATE NOT NULL;

-- Insersión masiva CON generate_series
INSERT INTO inventario.categoria VALUES (generate_series(1,10),'nombre_cat' || generate_series(1,10));
--insersion larga
INSERT INTO inventario.empleado (cedula, nombres, apellidos, direccion, telefono, email, contraseña) VALUES ('1234567890', 'Pablo','Jaramillo', 'Medellin', 0985421545,'tuptm@yahoo.es','xd**************xd');
--insersion corta
INSERT INTO inventario.empleado VALUES (1234597890, 'Roger','Pineda', 'Monserrat', 0995183583,'roer.pinedapaz@gmail.com','contraseña');
INSERT INTO inventario.proveedor VALUES (12345678, 'pepe', 'perez', 'pepe@gmail.com', '0986421578');
INSERT INTO inventario.factura_compra VALUES (1,12345678,'2005/12/01');


-- EJERCICIO 1: Actualizar el registro 2 del inventario para que la cantidad o el stock se encuentre en 100

SELECT * FROM inventario.inventario;

UPDATE inventario.inventario set cant_prod=10 where id_inv_prod=2;


SELECT * from inventario.inventario;

-- EJERCICIO 2: Crear un indice para el campo nombre_prod tabla inventario

CREATE index index_tipoproducto ON inventario.inventario (nom_prod);

CREATE unique index index_uniconomprod ON inventario (nom_prod);

-- EJERCICIO 3: Seleccione los productos del proveedor 1 con la funcion JOIN

SELECT fac.id_prov, 
i.nom_prod 
FROM inventario i 
INNER JOIN factura_compra fac ON i.id_fac_compr = fac.num_factura 
INNER JOIN proveedor pr
ON fac.id_prov = pr.id_prov
WHERE pr.id_prov = 12345678;

-- 
