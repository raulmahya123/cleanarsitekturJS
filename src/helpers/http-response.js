const MissingParamError = require("./missing-params");
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
}

module.exports = HttpResponse;
