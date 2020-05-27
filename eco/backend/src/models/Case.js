const { Schema, model } = require('mongoose');

const CaseSchema = new Schema({
    user_email: {
        type: String,
        required: true,
    },
    trap_url: {
        type: String,
        required: true,
    },
    client_id: { 
        type: String,
        required: true,
    },
    
}, {
    timestamp: true,
});

module.exports = model('Case', CaseSchema);