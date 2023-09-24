class unauthorizedError extends Error {
  constructor(paramName) {
    super("unauthorizedError ");
    this.name = "unauthorizedError";
  }
}
module.exports = unauthorizedError;
