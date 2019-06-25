const router = require('express').Router();

const authCheck = (req,res,next) => {
    if(!req.user)
    {
        //if user is not loggin in
        res.redirect('/auth/login');
    }
    else{
    next()
    }
};


router.get('/',authCheck,(req,res) => {

res.render('profile',{user: req.user});


console.log('user login is '+req.user);

});

module.exports = router;