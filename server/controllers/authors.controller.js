const Author = require('../models/authors.model')
// made const name same as name in model

module.exports.test = (req, res) => {
    res.json({
        message: "TEST MESSAGE FOR AUTHORS"
    })
}

module.exports.getAll = (req, res) => {
    Author.find()
        .then(allAuthors => res.json({ allAuthors }))
        .catch(err => res.json({ err }))
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json({ newAuthor }))
        .catch(err => {
            res.status(400).json(err)
            console.log(err)
        })
}

module.exports.getOne = (req, res) => {
    Author.findOne({_id:req.params.id})
        .then(oneAuthor => res.json({author:oneAuthor}))
        .catch(err => res.json({err}))
}

module.exports.update = (req,res) => {
    Author.findOneAndUpdate({_id:req.params.id},req.body, {new:true,runValidators:true})
        .then(updated => res.json({author: updated}))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteOne = (req,res) => {
    Author.deleteOne({_id:req.params.id})
        .then(deleted => res.json(deleted))
        .catch(err => response.json(err))
}