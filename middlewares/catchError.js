module.exports = (fun) => (req, res, next) =>
  Promise.resolve(fun(req, res, next)).catch(req, next);
