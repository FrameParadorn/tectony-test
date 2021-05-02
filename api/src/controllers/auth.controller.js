const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = db.user;

class AuthController {

  constructor() {
    this.login = this.login.bind(this)
  }

  /**
   * Compare password
   *
   * @param { string } password
   * @param { string } encyptPassword
   * @return { boolean }
   */
  async comparePassword(password, encyptPassword) {
    return await bcrypt.compare(password, encyptPassword);
  }

  /**
   * Create access token
   *
   * @param { object } payload
   */
  createAccessToken(payload) {
    return jwt.sign(
      {
        data: payload,
      },
      'secret',
      {expiresIn: '15m'},
    );
  }

  async login(req, res) {
    const {username, password} = req.body;

    const user = await User.findOne({username});
    if (!!user) {
      const match = await this.comparePassword(password, user.password);
      if (match) {
        res.send({
          access_token: this.createAccessToken({id: user._id}),
        });
        return
      }
    }

    res.status(400).send('username or password wrong');
  }
}

module.exports = new AuthController();
