const { Schema, model,Types } = require('../connection');

const mySchema = new Schema({
    userId: {
        type:Types.ObjectId,
        ref: 'SrcUser',
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

module.exports = model('Recordings', mySchema);