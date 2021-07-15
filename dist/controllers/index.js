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
exports.PathController = void 0;
const Path_1 = __importDefault(require("../models/Path"));
const logger_1 = __importDefault(require("../utils/logger"));
class PathController {
    getAllPaths(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const paths = yield Path_1.default.find({});
                return res.status(200).json({
                    count: paths.length,
                    data: paths
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
    addNewPath(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newPath = yield Path_1.default.create(req.body);
                return res.status(201).json({
                    data: newPath
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
    editPath(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let path = yield Path_1.default.findById(req.params.id);
                if (!path) {
                    logger_1.default.warn(`No resource with id '${req.params.id}'`);
                    return res.status(404).json({
                        error: 'No resource with specified id'
                    });
                }
                path.set(req.body);
                const updatedPath = yield path.save();
                return res.status(200).json({
                    data: updatedPath
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
    deletePath(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const path = yield Path_1.default.findById(req.params.id);
                if (!path) {
                    logger_1.default.warn(`No resource with id '${req.params.id}'`);
                    return res.status(404).json({
                        error: 'No resource with specified id'
                    });
                }
                yield path.remove();
                return res.status(200);
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
exports.PathController = PathController;
