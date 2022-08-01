import jwt from 'jsonwebtoken';

const senha = 'senhaSecreta';

const createToken = (username: string, password: string) => {
  const token = jwt.sign({ username, password }, senha);
  return token;
};

export default createToken;