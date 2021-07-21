const mongoose = require("mongoose")

const AuthorSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true,"AUTHOR NAME REQUIRED"],
        min: [3, "NAME MUST BE AT LEAST 3 CHARACTERS"]
    }
}, {timestamps : true})

const Author = mongoose.model("AuthorSchema", AuthorSchema)
module.exports = Author   // Author name just make same as controller name Author