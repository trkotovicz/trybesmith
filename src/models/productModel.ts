import connection from './connection';

const getAll = async () => {
  const sql = 'SELECT * FROM  Trybesmith.Products';
  const [products] = await connection.execute(sql);
  return products;
};

const create = async () => {};

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