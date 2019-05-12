const { Pictures } = require('../models');

exports.picture_create = (req, res, next) => {

    const picture = new Pictures({
        title: req.body.title,
        description: req.body.description,
        picture: req.body.picture
    });
    picture.save()
        .then(result => {
            console.log(result);
            res.status(201).json(picture)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}