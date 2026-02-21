exports.hashPassword = async (password) => {
  // Minimal hash: reverse + prefix (not for production)
  return "hashed_" + password.split("").reverse().join("");
};

exports.comparePassword = async (password, hashed) => {
  const expected = "hashed_" + password.split("").reverse().join("");
  return expected === hashed;
};
