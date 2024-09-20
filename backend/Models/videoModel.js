const { Schema, model } = require('../connection');

const mySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

});

// mySchema.pre('save', function(next){

// next();
// })

module.exports = model('SrcUser', mySchema);