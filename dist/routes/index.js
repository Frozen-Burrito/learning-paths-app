"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const pathController_1 = require("../controllers/pathController");
const resourceController_1 = require("../controllers/resourceController");
class Routes {
    constructor() {
        this.pathController = new pathController_1.PathController();
        this.resourceController = new resourceController_1.ResourceController();
    }
    routes(app) {
        app.route('/')
            .get((_, res) => {
            res.status(200).send({
                message: "Successful GET request"
            });
        });
        app.route('/paths')
            .get(this.pathController.getAllPaths)
            .post(this.pathController.addNewPath);
        app.route('/paths/:id')
            .put(this.pathController.editPath)
            .delete(this.pathController.deletePath);
        app.route('/resources')
            .get(this.resourceController.getResources)
            .post(this.resourceController.addResource);
        app.route('/resources/:id')
            .get(this.resourceController.getResourceById)
            .put(this.resourceController.editResource)
            .delete(this.resourceController.deleteResource);
    }
}
exports.Routes = Routes;
