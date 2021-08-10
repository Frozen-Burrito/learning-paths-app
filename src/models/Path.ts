import { Schema } from 'mongoose';
import { Path } from '../../index';

const PathSchema = new Schema<Path>({
    title: {
        type: String,
        required: [true, 'The path must have a title']
    },

    shortDescription: {
        type: String,
        required: [true, 'A short description is required']
    },

    description: String,

    steps: [
        {
            title: {
                type: String,
                required: [true, 'Each step must have a title']
            },
            description: String,
            score: Number,
        }
    ],

    resources: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Resource'
        }
    ],

    labels: [],

    createdAt: {
        type: Date,
        default: Date.now
    },

    modifiedAt: {
        type: Date,
        default: null
    }
});

export default PathSchema;