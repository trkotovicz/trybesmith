import { Request, Response } from 'express';
import IUser from '../interfaces/userInterface';
import userService from '../services/userService';

const getAll = async (req: Request, res: Response) => {
  const users = await userService.getAll();
  return res.status(200).json(users);
};

const create = async (req: Request, res: Response) => {
  const user = req.body as IUser;
  const result = await userService.create(user);
  return res.status(201).json({ token: result });
};

export = { getAll, create };