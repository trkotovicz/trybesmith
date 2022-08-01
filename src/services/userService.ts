import IUser from '../interfaces/userInterface';
import userModel from '../models/userModel';

const getAll = async () => {
  const result = await userModel.getAll();
  return result;
};

const create = async (user: IUser) => {
  const result = await userModel.create(user);
  return result;
};

export = { getAll, create };