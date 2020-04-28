const Article = require('../models/article');

/**
 * Récupère tous les articles
 * @param res
 * @param req
 */
exports.getAllArticles = (req, res) => {
    Article.find()
        .then(
            articles => res.status(200).json(articles)
        )
        .catch(
            error => res.status(400).json(error)
        )
}

/**
 * Retourne un article
 * @param res
 * @param req
 */
exports.getOneArticle = (req, res) => {
    Article.findOne({_id: req.params.id})
        .then(
            thing => res.status(200).json(thing)
        )
        .catch(
            error => res.status(404).json({error})
        );
}

/**
 * Créer un article
 * @param res
 * @param req
 */
exports.createArticle = (req, res) => {
    new Article({...req.body}).save()
        .then(
            article => res.status(201).json(article)
        ).catch(
        error => res.status(400).json({error})
    );
};

/**
 * Met à jour un article
 * @param res
 * @param req
 */
exports.updateArticle = (req, res) => {
    Article.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
        .then(
            article => res.status(200).json(article)
        )
        .catch(
            error => res.status(400).json({error})
        );
}

/**
 * Supprime un article
 * @param res
 * @param req
 */
exports.deleteArticle = (req, res) => {
    Article.deleteOne({_id: req.params.id}).then(
        () => res.status(204)
    ).catch(
        error => res.status(400).json({error})
    );
}
