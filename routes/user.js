var express = require("express");
var bodyparser = require("body-parser");
const Users = require("../models/User");
var jsonparser = bodyparser.json();
const router = express.Router();


router.post("/save", async (req, res) => {
    let body = req.body;
    let user = new Users();
    if (body.data.id != "") {
        
        user = await Users.findById(body.data.id);
    }
    user.name = body.data.name;
    user.mobileno = body.data.mobileno;
    user.email = body.data.email;
    user.password = body.data.password;
    // user.email = body.data.password;
    user.address = body.data.address;
    user.photopath = body.data.photopath;


    user.save().then(result => {
        res.end(JSON.stringify(result));
    }, err => {
        res.end(JSON.stringify(err));

    });
});

router.post("/list", async(req, res)=>{
    let users = await Users.find();
    res.json({data:users});
});

router.post("/get", async(req, res)=>{
    let body = req.body;
    let users = await Users.findById(body.data.id);
    res.json({data:users});
});

router.post("/delete", async(req, res)=>{
    let body = req.body;
    let users = await Users.findByIdAndDelete(body.data.id);
    let data = {
        "data": {
            "status": "success"
        }
    }
    res.end(JSON.stringify(data));
});

module.exports = router;


module.exports = router;