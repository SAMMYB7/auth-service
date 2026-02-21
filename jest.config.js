module.exports = {
  testEnvironment: "node",
  testMatch: [
    "**/tests/unit/**/*.test.js",
    "**/tests/integration/**/*.test.js",
    "**/tests/e2e/**/*.test.js",
  ],
  collectCoverage: true,
  coverageDirectory: "coverage",
};
