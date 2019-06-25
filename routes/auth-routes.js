const router = require('express').Router();
const session = require('express-session');
const passport = require('passport');



//Auth login
router.get('/login',(req,res) => {
    res.render('login');

});

//auth logout

router.get('/logout',(req,res) => {
    //Destroy the cookie and log out of google

    req.logout();
    req.session.destroy();
    req.session = null;
    res.redirect('https://accounts.google.com/logout');
   
    
  
});

// auth with google

router.get('/google',passport.authenticate('google', {

    scope: ['profile']
}));

//callback route for google to redirect to

router.get('/google/redirect',passport.authenticate('google'), (req,res) => {

    
   // res.send(req.user);
   res.redirect('/profile')

});

module.exports = router;