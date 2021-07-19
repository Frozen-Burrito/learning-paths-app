"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRouter = void 0;
const express_1 = require("express");
const pathController_1 = require("../controllers/pathController");
const resourceController_1 = require("../controllers/resourceController");
class ApiRouter {
    constructor() {
        this.pathController = new pathController_1.PathController();
        this.resourceController = new resourceController_1.ResourceController();
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.route('/')
            .get((_, res) => {
            res.status(200).send({
                message: "Successful GET request"
            });
        });
        this.router.route('/paths')
            .get(this.pathController.getAllPaths)
            .post(this.pathController.addNewPath);
        this.router.route('/paths/:id')
            .put(this.pathController.editPath)
            .delete(this.pathController.deletePath);
        this.router.route('/resources')
            .get(this.resourceController.getResources)
            .post(this.resourceController.addResource);
        this.router.route('/resources/:id')
            .get(this.resourceController.getResourceById)
            .put(this.resourceController.editResource)
            .delete(this.resourceController.deleteResource);
    }
}
exports.ApiRouter = ApiRouter;
