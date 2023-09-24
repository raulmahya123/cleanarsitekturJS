const LoginRouter = require("./login-router");
const MissingParamError = require("../helpers/missing-params"); // Import MissingParamError class

const makeSut = () => {
  return new LoginRouter();
};

describe("Login Router", () => {
  test("Should return 400 if no email is provided", async () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        password: "any_password",
      },
    };
    const httpResponse = sut.route(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("email")); // Use MissingParamError class
  });

  test("Should return 400 if no password is provided", async () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        email: "any_password@mail.com",
      },
    };
    const httpResponse = sut.route(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("password")); // Use MissingParamError class
  });

  test("Should return 500 if no httpRequest is provided", async () => {
    const sut = makeSut();
    const httpResponse = sut.route();

    expect(httpResponse.statusCode).toBe(500);
  });

  test("Should return 500 if httpRequest has no body", async () => {
    const sut = makeSut();
    const httpResponse = sut.route({});

    expect(httpResponse.statusCode).toBe(500);
  });

  test("Should call AuthUseCase with correct params", async () => {
    const sut = makeSut();
    const httpResponse = sut.route({});

    expect(httpResponse.statusCode).toBe(500);
  });
});
