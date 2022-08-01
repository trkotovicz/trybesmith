import { Request, Response } from 'express';
import productService from '../services/productService';

const getAll = async (req: Request, res: Response) => {
  const products = await productService.getAll();
  return res.status(200).json(products);
};

const create = async (_req: Request, _res: Response) => {};

export = { getAll, create };

/* classe

import ProductService from '../services/productService';

class ProductController {
  public service: ProductService;

  constructor(service: ProductService = new ProductService()) {
    this.service = service;
  }

  public async getAll(_req: Request, res: Response) {
    const products = await this.service.getAll();
    return res.status(200).json(products);
  }
}

export default ProductController;
*/
