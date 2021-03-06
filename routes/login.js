const bcrypt = require('bcrypt')
const route = require('express-promise-router')()
const sql = require('../services/db')
const { ClientError, AuthError } = require('../services/errorhandling')

route
  .post('/', async (req, res, next) => {
    const { username, password } = req.body
    if (req.session.userId) {
      res.json({
        message: 'already logged in'
      })
      return
    }
    try {
      const userData = await sql`
      SELECT * FROM users
      WHERE username = ${username}
      `

      if (!userData.count) {
        throw new ClientError('Invalid Username or Password', 401)
      }

      const [completeUserData] = userData

      const isPasswordValid = await bcrypt.compare(password, completeUserData.password)

      if (!isPasswordValid) {
        throw new ClientError('Invalid Username or Password', 401)
      }

      req.session.userId = completeUserData.user_id
      req.session.save(err => console.error(err))
      res.json({
        message: 'User logged in successfully!'
      })

    } catch (err) {
      next(err)
    }

  })
  .delete('/', async (req, res, next) => {
    try {
      if (req.session.userId) {
        await req.session.destroy()
      }
      throw new AuthError()
    } catch (err) {
      next(err)
    }
  })

module.exports = route
