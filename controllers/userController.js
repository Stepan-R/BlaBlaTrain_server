const Users = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.ACCESS_TOKEN_KEY, { expiresIn: '1d' });
}

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.login(email, password);

    const token = createToken(user._id);

    res.status(201).json({ email, token });
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.signup(email, password);

    const token = createToken(user._id);

    res.status(201).json({ email, token });
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

module.exports = {
  loginUser,
  signupUser
}