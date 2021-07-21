const authorController = require("../controllers/authors.controller")

module.exports = app => {
    app.get("/api/test",authorController.test)
    app.get("/api/author",authorController.getAll)
    app.post("/api/author",authorController.createAuthor)
    app.get("/api/author/:id",authorController.getOne)
    app.put("/api/author/:id",authorController.update)
    app.delete("/api/author/:id",authorController.deleteOne)
}