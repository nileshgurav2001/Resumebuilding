var express = require("express");
var bodyparser = require("body-parser");
// const { json } = require("express/lib/response");
const Hobbie = require("../models/Hobbie");
var jsonparser = bodyparser.json();
const router = express.Router();


router.post("/save", async (req, res) => {
    let body = req.body;
    let hobbie = new Hobbie();
    if (body.data.id != "") {
        
        hobbie = await Hobbie.findById(body.data.id);
    }
    hobbie.title = body.data.title
    hobbie.save().then(result => {
        res.end(JSON.stringify(result));
    }, err => {
        res.end(JSON.stringify(err));

    });
});

router.post("/list", async(req, res)=>{
    let hobbies = await Hobbie.find();
    res.json({data:hobbies});
});

router.post("/get", async(req, res)=>{
    let body = req.body;
    let hobbies = await Hobbie.findById(body.data.id);
    res.json({data:hobbies});
});

router.post("/delete", async(req, res)=>{
    let body = req.body;
    let hobbies = await Hobbie.findByIdAndDelete(body.data.id);
    let data = {
        "data": {
            "status": "success"
        }
    }
    res.end(JSON.stringify(data));
});

module.exports = router;


// module.exports = router;