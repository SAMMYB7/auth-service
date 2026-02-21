const authService = require("../services/authService");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authService.authenticate(email, password);
    res.json({ token: result.token, user: result.user });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};
