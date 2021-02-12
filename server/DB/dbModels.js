const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const keywordSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: String,
    name: String,
});

const standSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    responsableName: String,
    startHour: Date,
    endHour: Date,
    coords: String,
    keywords: [keywordSchema]
});
const dateFormat = 'HH:mm';

const floorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type:String, unique: true},
    planShape: String,
    stands: [standSchema]
});
floorSchema.plugin(mongooseUniqueValidator);


const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name : String,
    logoEvent : String,
    logoHost : String,
    floors: [floorSchema]
});

module.exports = mongoose.model('Event', eventSchema);
