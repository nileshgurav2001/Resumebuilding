var express = require("express");
var bodyparser = require("body-parser");
// const { json } = require("express/lib/response");
const Objective = require("../models/Objective");
var jsonparser = bodyparser.json();
const router = express.Router();

router.post("/login/", async (req, res) => {
    let body = req.body;
    let status = "";
    if (body.data.username == "admin" && body.data.password == "admin") {
        status = "success";

    } else {
        status = "failed"
    }
    let data = {
        "data": {
            "status": status
        }
    }
    res.end(JSON.stringify(data));
});


// router.post("/saveobjective", async (req, res) => {
//     let body = req.body;
//     let objective = new Objective();
//     if (body.data.id != "") {
        
//         objective = await Objective.findById(body.data.id);
//     }
//     objective.title = body.data.title
//     objective.save().then(result => {
//         res.end(JSON.stringify(result));
//     }, err => {
//         res.end(JSON.stringify(err));

//     });
// });

// router.post("/objectives", async(req, res)=>{
//     let objectives = await Objective.find();
//     res.json({data:objectives});
// });

// router.post("/objective", async(req, res)=>{
//     let body = req.body;
//     let objectives = await Objective.findById(body.data.id);
//     res.json({data:objectives});
// });

// router.post("/deleteobjective", async(req, res)=>{
//     let body = req.body;
//     let objectives = await Objective.findByIdAndDelete(body.data.id);
//     let data = {
//         "data": {
//             "status": "success"
//         }
//     }
//     res.end(JSON.stringify(data));
// });

module.exports = router;


module.exports = router;