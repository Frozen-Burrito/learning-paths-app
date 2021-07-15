import { Response, Application} from 'express';
import { PathController } from '../controllers/pathController';
import { ResourceController } from '../controllers/resourceController';

export class Routes {

    public pathController: PathController = new PathController();
    public resourceController: ResourceController = new ResourceController();

    public routes(app: Application) {
        app.route('/')
            .get((_, res: Response) => {
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