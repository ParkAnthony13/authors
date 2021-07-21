const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/authors", { // DB name is authors here
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("CONNECTED TO AUTHORS DB"))
    .catch(err => console.log("Error: ", err))