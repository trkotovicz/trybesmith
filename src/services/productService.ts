import productModel from '../models/productModel';

const getAll = async () => {
  const result = await productModel.getAll();
  return result;
};

const create = async () => {};

export = { getAll, create };

/* classe
import IProduct from '../interfaces/productInterface';
import connection from '../models/connection';
import ProductModel from '../models/productModel';

class ProductService {
  public model: ProductModel;

  constructor(model: ProductModel = new ProductModel(connection)) {
    this.model = model;
  }

  getAll = async (): Promise<IProduct[]> => this.model.getAll();
}

export default ProductService;
*/
