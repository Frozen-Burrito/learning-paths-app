import { Schema, model } from 'mongoose';

const PathSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    steps: [
        {
            title: {
                type: String,
                // required: true,
            },
            description: String
        }
    ],
    resources: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Resource'
        }
    ]
});

export default PathSchema;