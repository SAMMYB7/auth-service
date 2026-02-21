const authService = require("../../src/services/authService");

describe("Login Flow E2E", () => {
  test("full registration and login flow works", async () => {
    const user = await authService.createUser(
      "e2e@example.com",
      "password123",
      "E2E User",
    );
    expect(user.email).toBe("e2e@example.com");

    const loginResult = await authService.authenticate(
      "e2e@example.com",
      "password123",
    );
    expect(loginResult).toHaveProperty("token");
    expect(loginResult.user.email).toBe("e2e@example.com");
  });
});
