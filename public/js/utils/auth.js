const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/api/users/redirect');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  