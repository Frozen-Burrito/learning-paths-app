"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteResource = exports.editResource = exports.addResource = exports.getResourceById = exports.getResources = exports.createPath = exports.getPaths = void 0;
const axios_1 = __importDefault(require("axios"));
const baseUrl = '/api';
const pathsUrl = baseUrl + '/paths';
const resourcesUrl = baseUrl + '/resources';
const defaultHeaders = {
    headers: {
        'Content-Type': 'application/json'
    }
};
const getPaths = () => axios_1.default.get(pathsUrl);
exports.getPaths = getPaths;
const createPath = (newPath) => axios_1.default.post(pathsUrl, newPath, defaultHeaders);
exports.createPath = createPath;
const getResources = () => axios_1.default.get(resourcesUrl);
exports.getResources = getResources;
const getResourceById = (id) => axios_1.default.get(resourcesUrl + `/${id}`);
exports.getResourceById = getResourceById;
const addResource = (newResource) => axios_1.default.post(resourcesUrl, newResource, defaultHeaders);
exports.addResource = addResource;
const editResource = (id) => axios_1.default.put(resourcesUrl + `/${id}`);
exports.editResource = editResource;
const deleteResource = (id) => axios_1.default.delete(resourcesUrl + `/${id}`);
exports.deleteResource = deleteResource;
