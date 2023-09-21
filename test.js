const express = require('express')
const mongoose = require('mongoose')
const AccountModel = mongoose.model('Account')

module.exports = () => {
  const signUpRouter = new SignUpRouter() // Create an instance of SignUpRouter
  const router = express.Router()

  router.post('/signup', ExpressRouterAdapter.adapt(signUpRouter))

  return router
}

class ExpressRouterAdapter {
  static adapt (router) {
    return async (req, res) => {
      const httpRequest = {
        body: req.body
      }
      const httpResponse = await router.route(httpRequest)
      res.status(httpResponse.statusCode).json(httpResponse.body)
    }
  }
}

class SignUpRouter {
  async route (httpRequest) {
    const { email, password, repeatPassword } = httpRequest.body
    const user = await new SignUpCase().signUp(email, password, repeatPassword)
    return {
      statusCode: 200,
      body: user
    }
  }
}

class SignUpCase {
  async signUp (email, password, repeatPassword) {
    if (password === repeatPassword) {
      return await new AddCountRepository().add(email, password)
    }
  }
}

class AddCountRepository {
  async add (email, password) {
    const user = await AccountModel.create({ email, password })
    return user
  }
}
