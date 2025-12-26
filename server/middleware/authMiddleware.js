const { decode } = require("jsonwebtoken");
const { isVerifyToken } = require("../utils/tokens");

const isAuthenticMiddle = (req, res, next) => {
  try {
    const token = req.cookies.acc_token;
    const decoded = isVerifyToken(token);
    req.user = decoded;
    console.log(token);
    next();
  } catch (error) {
    next();
  }
};

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.acc_token;
    const decoded = isVerifyToken(token);
    if (!decoded)
      return res.status(400).send({ message: "Unauthorized Request" });
    req.user = decoded;

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { isAuthenticMiddle, authMiddleware };
