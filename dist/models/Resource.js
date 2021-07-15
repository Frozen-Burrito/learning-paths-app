"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ResourceSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    resourceUrl: String,
});
exports.default = ResourceSchema;
