const loggingMiddleware = (req, res, next) => {
  console.log("ip:", req);
  next();
};

module.exports = { loggingMiddleware };
