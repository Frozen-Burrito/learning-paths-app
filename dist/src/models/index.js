"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceModel = exports.PathModel = void 0;
const mongoose_1 = require("mongoose");
const Path_1 = __importDefault(require("./Path"));
const Resource_1 = __importDefault(require("./Resource"));
exports.PathModel = mongoose_1.model('Path', Path_1.default);
exports.ResourceModel = mongoose_1.model('Resource', Resource_1.default);
