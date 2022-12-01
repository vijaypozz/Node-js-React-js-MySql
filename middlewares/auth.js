//Handling users roles
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        `Role (${req.user.role}) is not allowed to access this resource`,
        403
      );
    }
    next();
  };
};
