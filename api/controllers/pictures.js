const { Pictures, Users } = require('../models');

exports.picture_create = (req, res, next) => {
    req.body.userId = req.user.id
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

// exports.picture_create = async(req, res) => {
//     try {
//         req.body.userId = req.user.id;
//         const picture = await Pictures.create(req.body);
//         if (!picture) res.status(400).json({"message": "Error to create picture"});
//         return res.status(200).json(picture);
//     } catch(e) {
//         console.log(e)
//         return res.status(400).json(e)
//     }
// }

exports.pictures_get_all = async(req, res, next) => {
    
    let allPictures = await Pictures.findAll({where: {}, include: [
        { model: Users, as: "user" }
    ]});
    return res.status(200).json(allPictures);

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
    //     });

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