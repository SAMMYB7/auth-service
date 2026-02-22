const authService = require("../services/authService");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const result = await authService.authenticate(email, password);
    res.json({ token: result.token, user: result.user });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};
