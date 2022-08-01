import connection from './connection';

const getAll = async () => {
  const sql = `SELECT orders.id, orders.userId, JSON_ARRAYAGG(product.id) AS productsIds 
    FROM Trybesmith.Orders AS orders
    INNER JOIN Trybesmith.Products AS product
    ON orders.id = product.orderId
    GROUP BY orders.id
    ORDER BY orders.userId;`;
  const [orders] = await connection.execute(sql);
  return orders;
};

// JSON_ARRAYAGG => https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html
export default { getAll };
