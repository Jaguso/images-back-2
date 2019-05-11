const { Users } = require('../models');

exports.user_signup = async(req, res, next) => {
    let user = await Users.create(req.body);
    if (!user) res.status(400).json({ message: 'Could not create user' });

    return res.status(201).json({
        message: "User created",
        id: user.id
    })
}