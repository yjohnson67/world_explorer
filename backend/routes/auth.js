const express = require('express');
const passport = require('passport');

const router = express.Router();

// Start GitHub OAuth
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));

// GitHub OAuth callback
router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

// Protected route
router.get('/dashboard', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  const user = req.user;
  res.send(`
    <h1>Hello, ${user.username}!</h1>
    <img src="${user.photos[0].value}" width="100" />
    <p><a href="/auth/logout">Logout</a></p>
  `);
});

// Logout route
router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});

module.exports = router;

