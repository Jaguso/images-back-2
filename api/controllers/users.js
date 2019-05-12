const { Users } = require('../models');

exports.user_signup = (req, res, next) => {

    const user = new Users({
        username: req.body.name,
        email: req.body.email,
        password: req.body.password
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