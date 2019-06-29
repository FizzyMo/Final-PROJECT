const router = require('express').Router();
const passport = require('passport');

// const logoutFunction = (req, res, next) => {
//     req.logout();
//     // req.session.destroy();
//      req.session = null;
//         res.redirect('https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:3000').then((res) => {
            
//             next();
//             res.redirect('/');
//         })
     
 
// };

router.get('/test', (req, res) => {
    res.send('test totally works!!!');
});

// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    req.logout();
    // req.session.destroy();
     req.session = null;
     res.redirect('https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:3000');
     

});

// // auth logout
// router.get('/logout', logoutFunction, (req, res) => {
    
//      res.redirect('/')
// });



// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    // res.send(req.user);
    res.redirect('http://localhost:3000/profile');
});

module.exports = router;
