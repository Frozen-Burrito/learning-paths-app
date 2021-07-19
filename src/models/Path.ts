import { Schema } from 'mongoose';

const PathSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    shortDescription: {
        type: String,
        required: true
    },

    description: String,

    steps: [
        {
            title: {
                type: String,
                required: true
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