const tokenService = require("../../src/services/tokenService");

describe("TokenService", () => {
  test("generateToken returns a base64 string", () => {
    const token = tokenService.generateToken({ id: 1, email: "a@b.com" });
    expect(typeof token).toBe("string");
    expect(token.length).toBeGreaterThan(0);
  });

  test("verifyToken decodes a valid token", () => {
    const token = tokenService.generateToken({ id: 2, email: "c@d.com" });
    const decoded = tokenService.verifyToken(token);
    expect(decoded.id).toBe(2);
    expect(decoded.email).toBe("c@d.com");
    expect(decoded).toHaveProperty("iat");
  });

  test("verifyToken throws for invalid token", () => {
    expect(() => tokenService.verifyToken("not-valid")).toThrow(
      "Invalid token",
    );
  });
});
