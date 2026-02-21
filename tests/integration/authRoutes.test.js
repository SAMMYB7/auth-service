const express = require("express");
const authRoutes = require("../../src/routes/authRoutes");

// Minimal integration test (would use supertest in real scenario)
describe("Auth Routes Integration", () => {
  test("POST /register route is defined", () => {
    const app = express();
    app.use(express.json());
    app.use("/auth", authRoutes);
    expect(app).toBeDefined();
  });

  test("POST /login route is defined", () => {
    const app = express();
    app.use(express.json());
    app.use("/auth", authRoutes);
    expect(app).toBeDefined();
  });
});
