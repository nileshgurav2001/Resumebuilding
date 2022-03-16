const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
    {
        title: {
            type: String,
            required: true
        }
    }
)
const Hobbie = mongoose.model("hobbies", schema);

module.exports = Hobbie;