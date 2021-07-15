import { Schema, model } from 'mongoose';

const ResourceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    resourceUrl: String,
});

export default ResourceSchema;