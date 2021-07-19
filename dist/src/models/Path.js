"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PathSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    steps: [
        {
            title: {
                type: String,
            },
            description: String
        }
    ],
    resources: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Resource'
        }
    ]
});
exports.default = PathSchema;
