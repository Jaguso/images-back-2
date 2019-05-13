const { Users } = require('../models');
const bcrypt = require('bcrypt');

exports.user_signup = (req, res, next) => {

    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({ error: err });
        } else {
            const user = new Users({
                username: req.body.name,
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(result => {
                    console.log(result);
                    res.status(201).json({
                        message: 'User created',
                        id: user.id
                    })
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
        }
    })

    
}