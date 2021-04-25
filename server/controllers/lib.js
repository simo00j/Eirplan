const express = require('express');
const dataExt = require('../tools/dataExtractor');
const dbModels = require('../database/dbModels');
const fs = require('fs');
const router = express.Router();
var path = require('path');
const xmlParser = require('xml2json');


async function add(req, res) {

    dbModels.collection.deleteMany({});
    var floors_number = parseInt(req.body.floors_number, 10),
        logopath = req.files.logopath,
        hostpath = req.files.hostpath,
        floors = [];
    // extract the data files
    for (let i = 1; i <= floors_number; i++) {
        floors.push(dataExt.floorDataExtractor(req.files[i]));
    }
    //fill the event
    var event = new dbModels({
        name: req.body.eventname,
        logoEvent: logopath.name,
        logoHost: hostpath.name,
        floors: floors
    });
    event.save(function (err) {
        if (err) {
            console.log(err); 
        }
        console.log("added sucessfully");
        //res.sendFile(path.resolve(__dirname + '/../interface/index3.html'));
    });
}

async function event(req,res){
    try{
        const Event = await dbModels.find();
        console.log(Event);
      } catch(err) {
        console.log(err);
      }
      //res.sendFile(path.resolve(__dirname + '/../interface/index3.html'));
    
    } 

async function eventid(req,res){
    try {
        const Event=await dbModels.findById(req.query.eventId);
        console.log(Event);
      }catch(err ){
        console.log(err);
     }

}

async function home(req,res){
    try{
        console.log("ahmed");
    }catch(err ){
        console.log(err);
     }
}


async function send(req,res){
    try{
        const Event = await dbModels.find();
        res.status(200).send(Event);
    } catch(err) {
        res.status(404).send(err);
    }
}

exports.add = add;
exports.event = event;
exports.eventid =eventid;
//exports.home=home;
//exports.send =send;