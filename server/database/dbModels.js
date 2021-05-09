const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

//setting event models schemas
const keywordSchema = mongoose.Schema({
    name: String,
});

const wallSchema = mongoose.Schema({
    path: String,
    strokeWidth: String
});

const standSchema = mongoose.Schema({
    name: String,
    respo: String,
    starthour: String,
    endhour: String,
    path: String,
    keywords: [keywordSchema],
    resume: String
});
const dateFormat = 'HH:mm';

const nameSchema = mongoose.Schema({
    label: String,
    x: Number,
    y: Number,
    fontSize: Number
});

const floorSchema = mongoose.Schema({
    name: {type:String, unique: true},
    planShape: [wallSchema],
    stands: [standSchema],
    names: [nameSchema]
});
floorSchema.plugin(mongooseUniqueValidator);

const standInfoSchema = mongoose.Schema({
    standId:  mongoose.Schema.Types.ObjectId,
    name: String 
});

const keywordsStatSchema = mongoose.Schema({
    keywordId: mongoose.Schema.Types.ObjectId,
    name: String,
    standList: [standInfoSchema],
    frequency: Number

});

const eventSchema = mongoose.Schema({
    name: String,
    logoEvent: String,
    logoHost: String,
    floors: [floorSchema],
    keywordsStats: [keywordsStatSchema] 
});

module.exports = mongoose.model('Event', eventSchema);
