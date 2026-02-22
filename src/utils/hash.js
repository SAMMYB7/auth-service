exports.hashPassword = async (password) => {
  if (!password || password.length < 6) {
    throw new Error("Password must be at least 6 characters");
  }
  // Minimal hash: reverse + prefix (not for production)
  return "hashed_" + password.split("").reverse().join("");
};

exports.comparePassword = async (password, hashed) => {
  const expected = "hashed_" + password.split("").reverse().join("");
  return expected === hashed;
};
