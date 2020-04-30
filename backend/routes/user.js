const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.post('/register', (req, res, next) => {

    let emailId = req.body.email;

    User.getUserByEmail(emailId, (err, su) => {
        if(err) throw err;
        if(!su){
            console.log(req.body);
            let user = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                organisation: req.body.organisation
            });
            
            User.addUser(user, (err, user) => {
                if(err){
                    console.log(err);
                }
                else{
                    console.log(user);
                    return res.json({success: true, msg: 'Account creation successfull.', data: user});
                }
            });

        }
        else{
            console.log("User already exsists.");
            return res.json({success: false, msg: 'User already exsists.'});
        }
        
    });    
});

router.post('/authenticate', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByEmail(email, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'User Not Found'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){

                res.json({
                    success: true,
                    user: {
                        id: user._id,
                        name: user.name,
                        email: user.email
                    }
                });
            }else{
                return res.json({success: false, msg: 'Wrong Password'});
            }
        });
    });
});

module.exports = router;