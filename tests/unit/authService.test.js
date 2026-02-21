const authService = require("../../src/services/authService");

describe("AuthService", () => {
  test("createUser registers a new user", async () => {
    const user = await authService.createUser(
      "test@example.com",
      "pass123",
      "Test User",
    );
    expect(user).toHaveProperty("id");
    expect(user.email).toBe("test@example.com");
    expect(user.name).toBe("Test User");
  });

  test("authenticate returns token for valid credentials", async () => {
    await authService.createUser("login@example.com", "secret", "Login User");
    const result = await authService.authenticate(
      "login@example.com",
      "secret",
    );
    expect(result).toHaveProperty("token");
    expect(result.user.email).toBe("login@example.com");
  });

  test("authenticate throws for invalid password", async () => {
    await authService.createUser("bad@example.com", "correct", "Bad User");
    await expect(
      authService.authenticate("bad@example.com", "wrong"),
    ).rejects.toThrow("Invalid password");
  });
});
