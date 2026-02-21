const tokenService = require("./tokenService");
const { hashPassword, comparePassword } = require("../utils/hash");

const users = [];

exports.authenticate = async (email, password) => {
  const user = users.find((u) => u.email === email);
  if (!user) throw new Error("User not found");

  const valid = await comparePassword(password, user.password);
  if (!valid) throw new Error("Invalid password");

  const token = tokenService.generateToken({ id: user.id, email: user.email });
  return { token, user: { id: user.id, email: user.email, name: user.name } };
};

exports.createUser = async (email, password, name) => {
  const exists = users.find((u) => u.email === email);
  if (exists) throw new Error("User already exists");

  const hashed = await hashPassword(password);
  const user = { id: users.length + 1, email, password: hashed, name };
  users.push(user);
  return { id: user.id, email: user.email, name: user.name };
};
