"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const controllers_1 = require("../controllers");
class Routes {
    constructor() {
        this.pathController = new controllers_1.PathController();
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
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
    }
}
exports.Routes = Routes;
