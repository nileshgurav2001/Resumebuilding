const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        htmlfilepath: {
            type: String,
            required: true
        }
    }
);
const Templates = mongoose.model("templates", schema);

module.exports = Templates;