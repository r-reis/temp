const { Schema, model } = require('mongoose');

const ClientSchema = new Schema({
    user_case: { 
        type: String,
        required: true,
    },
    client_id: { 
        type: String,
        required: true, 
    },
    client_ip: { 
        type: JSON,
        required: true, 
    },
});

module.exports = model('Client', ClientSchema);