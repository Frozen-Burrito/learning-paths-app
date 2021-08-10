import { Schema } from 'mongoose';
import { Resource } from '../../index';

const ResourceSchema = new Schema<Resource>({
    name: {
        type: String,
        required: [true, 'A name is required for the resource'],
        maxlength: 100,
    },
    description: {
        type: String,
        required: [true, 'The resource must have a description'],
        maxlength: 300,
    },
    resourceUrl: {
        type: String,
        required: [true, 'The resource must have a valid url'],
        unique: true
    },
    labels: [],

    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default ResourceSchema;