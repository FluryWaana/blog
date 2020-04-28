const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 180,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
    comments: [{
        authorId: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true,
            minLength: 2,
            maxLength: 300
        }
    }],
    meta: {
        votes: {
            type: Number
        },
        visited: {
            type: Number
        }
    },
    categoryId: {
        type: String,
        required: true
    },
    authorId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: false
    }
});

module.exports = mongoose.model('Article', articleSchema);
