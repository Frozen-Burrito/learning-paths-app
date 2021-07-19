import { Schema } from 'mongoose';

const ResourceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    resourceUrl: String,
    labels: [],

    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default ResourceSchema;