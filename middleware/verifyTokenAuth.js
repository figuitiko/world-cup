const jsonWebToken = require('jsonwebtoken');

const verifyTokenAuth = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).json('Access Denied');
  };
  try {
    const verified = jsonWebToken.verify(token, process.env.JWT_SECRET);    
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json('Invalid Token');
  }
};

export default verifyTokenAuth;