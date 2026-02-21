const SECRET = "my-secret-key";

exports.generateToken = (payload) => {
  // Minimal token: base64 encode the payload with a timestamp
  const data = { ...payload, iat: Date.now() };
  return Buffer.from(JSON.stringify(data)).toString("base64");
};

exports.verifyToken = (token) => {
  try {
    const decoded = JSON.parse(Buffer.from(token, "base64").toString());
    return decoded;
  } catch {
    throw new Error("Invalid token");
  }
};
