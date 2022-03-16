var express = require("express");
var bodyparser = require("body-parser");
// const { json } = require("express/lib/response");
const Qualification = require("../models/Qulification");
var jsonparser = bodyparser.json();
const router = express.Router();


router.post("/save", async (req, res) => {
    let body = req.body;
    let qulification = new Qualification();
    if (body.data.id != "") {
        
        qulification = await Qualification.findById(body.data.id);
        
    }
    qulification.title = body.data.title;
   
    qulification.save().then(result => {
        res.end(JSON.stringify(result));
    }, err => {
        res.end(JSON.stringify(err));

    });
});

router.post("/list", async(req, res)=>{
    let qulifications = await Qualification.find();
    console.log(qulifications);
    res.json({data:qulifications});
});

router.post("/get", async(req, res)=>{
    let body = req.body;
    let qulifications = await Qualification.findById(body.data.id);
    res.json({data:qulifications});
});

router.post("/delete", async(req, res)=>{
    let body = req.body;
    let qulifications = await Qualification.findByIdAndDelete(body.data.id);
    let data = {
        "data": {
            "status": "success"
        }
    }
    res.end(JSON.stringify(data));
});

module.exports = router;


// module.exports = router;