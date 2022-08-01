import { ResultSetHeader } from 'mysql2';
import IUser from '../interfaces/userInterface';
import connection from './connection';
import createToken from '../services/jwtService';

const getAll = async () => {
  const sql = 'SELECT * FROM Trybesmith.Users';
  const [users] = await connection.execute(sql);
  return users;
};

const create = async (user: IUser) => {
  const { username, classe, level, password } = user;
  const sql = 'INSERT INTO Trybesmith.Users(username, classe, level, password) VALUES (?, ?, ?, ?)';
  await connection.execute<ResultSetHeader>(sql, [username, classe, level, password]);

  const token = createToken(username, password);
  return token;
};

export = { getAll, create };