const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//creating new schema
let newsSchema = new Schema({
    title: {type: String, required: true, max: 100},
    comments: {type: Number, required: true},
    by:{type:String},
    points:[Number],
});


// Export the model
module.exports = mongoose.model('news', newsSchema)