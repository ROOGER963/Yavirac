CREATE TABLE funciones.products
(
    id_product serial NOT NULL,
    nom_product character varying(50),
    stock_product integer,
    precio_venta numeric(30),
    precio_compra numeric(30),
    PRIMARY KEY (id_product)
);

ALTER TABLE IF EXISTS funciones.products
    OWNER to postgres;
    
CREATE OR REPLACE FUNCTION get_product_info(
    IN product_id INT,
    OUT product_name VARCHAR(50),
    OUT product_stock INT,
    OUT product_sale_price NUMERIC(30),
    OUT product_purchase_price NUMERIC(30)
)
RETURNS RECORD AS $$
BEGIN
    SELECT
        nom_product,
        stock_product,
        precio_venta,
        precio_compra
    INTO
        product_name,
        product_stock,
        product_sale_price,
        product_purchase_price
    FROM
        funciones.products
    WHERE
        id_product = product_id;
        
    RETURN;
END;
$$ LANGUAGE plpgsql;
SELECT * FROM get_product_info(1);

    
    
