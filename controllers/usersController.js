var db = require('../models');
var jwt = require('jsonwebtoken');

// Routes
// =============================================================
module.exports = {
  validateToken: function(req, res) {
    return jwt.verify(req.body.token, 'shhhhh', function(err, decoded) {
      if (err) {
        return res.status(400).send({ msg: 'yo token is bad!' });
      }
      return res.status(200).send({ msg: 'yo token is good!' });
    });
  },
  login: function(req, res) {
    res.json({ oh: 'no' });
  },
  signup: function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    }).then(function(user) {
      var token = jwt.sign({ email: user.email }, 'shhhhh');
      res.json({ email: user.email, token: token });
    });
  },
};
