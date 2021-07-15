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
                required: true,
            },
            description: String
        }
    ]
});
exports.default = mongoose_1.model('Path', PathSchema);
