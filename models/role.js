const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 60,
        lowercase: true,
        trim: true
    }
});

module.exports = mongoose.model('Role', roleSchema);
