const { Pictures, Users } = require('../models');

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

exports.pictures_get_all = (req, res, next) => {
    Pictures.findAll().then(pictures => res.status(200).json(pictures));

    // let allPictures = await Pictures.findAll({where: {}, include: [
    //     { model: Users, as: "user" }
    // ]});
    // return res.status(200).json(allPictures);

    // Pictures.find()
    //     .exec()
    //     .then(docs => {
    //         console.log(docs);
    //         res.status(200).json(docs);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.status(500).json({
    //             error: err
    //         });
        // });
    // Pictures.findAll()
    //     .exec()
    //     .then(docs => {
    //         console.log(docs);
    //         res.status(200).json(docs);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.status(500).json({
    //             error: err
    //         });
    //     });
}