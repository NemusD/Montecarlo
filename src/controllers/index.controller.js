import { pool } from '../db.js';

export const dataQad = async (req, res) => {
    const result_QAD = await pool.query(/* "SELECT ps_orders.id_cart AS 'OC_QAD',IFNULL(ps_customer.id_customer,'') AS 'ID CLIENTE', IFNULL(CONCAT(LEFT(LPAD(REPLACE(REPLACE(TRIM(ps_address.dni), '.', ''), '-', ''),9,'0'),8),'-',RIGHT(LPAD(REPLACE(REPLACE(TRIM(ps_address.dni), '.',''),'-',''),9,'0'),1)),'') AS 'RUT', IFNULL(TRIM(ps_pz_comuna.name),'') AS 'COMUNA', IFNULL(ps_address.city,'') AS 'NOMBRE REGION', IFNULL(TRIM(ps_order_detail.product_reference),'') AS 'ARTICULO', IFNULL(ps_order_detail.product_quantity,0) AS 'CANTIDAD', ROUND((ps_order_detail.unit_price_tax_incl),0) AS 'PRECIO BRUTO', IFNULL(ROUND(ps_orders.total_discounts),0) AS 'DESCUENTO MONTO', IFNULL(ROUND(ps_order_detail.reduction_amount_tax_incl),0) AS 'DESCUENTO PRODUCTO', ROUND(ps_orders.total_discounts) AS 'DESCUENTO TOTAL', IFNULL(SUBSTRING_INDEX(ps_order_detail.product_name, ' ', 1),'') AS 'TIPO PRODUCTO', IFNULL(TRIM(ps_category_lang.name),'') AS 'MARCA', IFNULL(TRIM(ps_orders.date_add),'') AS 'FECHA COMPRA', IFNULL(TRIM(ps_carrier.name),'') AS 'TIPO ENVIO', IFNULL(TRIM(ps_pz_region.id_pz_region),'') AS 'ID REGION', IFNULL(ps_orders.module,'') AS 'module' , CASE WHEN ps_orders.id_shop = 1 THEN 'PZ' WHEN ps_orders.id_shop = 2 THEN 'BR' WHEN ps_orders.id_shop = 3 THEN 'POLLINI'  WHEN ps_orders.id_shop = 4 THEN 'PANAMAJACK' WHEN ps_orders.id_shop = 5 THEN '16HRS' WHEN ps_orders.id_shop = 6 THEN 'MINGO' WHEN ps_orders.id_shop = 7 THEN 'ZAPPA' ELSE ' ' END AS 'nombre_tienda', '' as DatosPago FROM ps_orders", LEFT OUTER JOIN ps_order_detail ON ps_order_detail.id_order = ps_orders.id_order, LEFT OUTER JOIN ps_customer ON ps_customer.id_customer = ps_orders.id_customer, LEFT OUTER JOIN ps_category_product ON ps_category_product.id_product = ps_order_detail.product_id, LEFT OUTER JOIN ps_category ON ps_category.id_category = ps_category_product.id_category, LEFT OUTER JOIN ps_category_lang ON ps_category_lang.id_category = ps_category.id_category, LEFT OUTER JOIN ps_pz_comuna ON ps_pz_comuna.id_pz_comuna = ps_state.id_pz_comuna, LEFT OUTER JOIN ps_carrier ON ps_carrier.id_carrier = ps_orders.id_carrier, LEFT OUTER JOIN ps_pz_region ON ps_pz_region.code = ps_address.city WHERE ps_orders.date_add BETWEEN :fechaStart AND  :fechaEnd AND ps_category_lang.id_shop = 1 AND ps_category.id_parent IN (79, 307) AND ps_orders.current_state NOT IN (1015, 1017, 1018, 1020, 1022, 1023) ORDER BY ps_orders.id_cart DESC " */)
    res.json(result_QAD)
}