const authService = require("../services/authService");

exports.register = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const user = await authService.createUser(email, password, name);
    res.status(201).json({ message: "User registered", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
