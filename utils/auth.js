const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
      alert("Please log in or create an account to continue!")
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  