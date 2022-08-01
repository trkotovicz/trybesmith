import IProduct from '../interfaces/productInterface';
import connection from './connection';

const getAll = async () => {
  const sql = 'SELECT * FROM  Trybesmith.Products';
  const [products] = await connection.execute(sql);
  return products;
};

const create = async (product: IProduct) => {
  const { name, amount } = product;
  const sql = 'INSERT INTO Trybesmith.Products(name, amount) VALUES (?, ?)';
  const [result] = await connection.execute(sql, [name, amount]);
  return result;
};

export = { getAll, create };

/* classe
import { Pool } from 'mysql2/promise';
import IProduct from '../interfaces/productInterface';

class ProductModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  getAll = async (): Promise<IProduct[]> => {
    const sql = 'SELECT * FROM  Trybesmith.Products';
    const [products] = await this.connection.execute(sql);
    return products as IProduct[];
  };
}

export default ProductModel;
*/