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
const objective = mongoose.model("objectives", schema);

module.exports = objective;