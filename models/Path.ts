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
                required: true,
            },
            description: String
        }
    ]
});

export default model('Path', PathSchema);