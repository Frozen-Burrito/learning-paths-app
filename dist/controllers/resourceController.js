"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceController = void 0;
const models_1 = require("../models");
const logger_1 = __importDefault(require("../utils/logger"));
class ResourceController {
    getResources(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resources = yield models_1.ResourceModel.find({});
                return res.status(200).json({
                    count: resources.length,
                    data: resources
                });
            }
            catch (error) {
                logger_1.default.error(error.message);
                return res.status(500).json({
                    error: error.message
                });
            }
        });
    }
    getResourceById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let resource = yield models_1.ResourceModel.findById(req.params.id);
                if (!resource) {
                    logger_1.default.warn(`No resource with id '${req.params.id}'`);
                    return res.status(404).json({
                        error: 'No resource with specified id'
                    });
                }
                return res.status(200).json({
                    data: resource
                });
            }
            catch (error) {
                logger_1.default.error(error.message);
                return res.status(500).json({
                    error: error.message
                });
            }
        });
    }
    addResource(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newResource = yield models_1.ResourceModel.create(req.body);
                return res.status(201).json({
                    data: newResource
                });
            }
            catch (error) {
                logger_1.default.error(error.message);
                return res.status(500).json({
                    error: error.message
                });
            }
        });
    }
    editResource(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let resource = yield models_1.ResourceModel.findById(req.params.id);
                if (!resource) {
                    logger_1.default.warn(`No resource with id '${req.params.id}'`);
                    return res.status(404).json({
                        error: 'No resource with specified id'
                    });
                }
                resource.set(req.body);
                const updatedResource = yield resource.save();
                return res.status(200).json({
                    data: updatedResource
                });
            }
            catch (error) {
                logger_1.default.error(error.message);
                return res.status(500).json({
                    error: error.message
                });
            }
        });
    }
    deleteResource(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resource = yield models_1.ResourceModel.findById(req.params.id);
                if (!resource) {
                    logger_1.default.warn(`No resource with id '${req.params.id}'`);
                    return res.status(404).json({
                        error: 'No resource with specified id'
                    });
                }
                yield resource.remove();
                return res.status(204);
            }
            catch (error) {
                logger_1.default.error(error.message);
                return res.status(500).json({
                    error: error.message
                });
            }
        });
    }
}
exports.ResourceController = ResourceController;
