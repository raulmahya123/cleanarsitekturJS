const MissingParamError = require("./missing-params");
const UnauthorizedError = require("./unauthorized-error");
class HttpResponse {
  static badRequest(paramName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName), // Assuming you have MissingParamError class
    };
  }

  static serverError() {
    return {
      statusCode: 500,
    };
  }

  static success(data) {
    return {
      statusCode: 200,
      body: data,
    };
  }

  static unauthorizedError() {
    return {
      statusCode: 401,
      body: new UnauthorizedError(), // Assuming you have unauthorizedError class
    };
  }
}

module.exports = HttpResponse;
