import { Response, Application, Router } from 'express';
import { PathController } from '../controllers/pathController';
import { ResourceController } from '../controllers/resourceController';

export class ApiRouter {

    public router: Router;

    public pathController: PathController = new PathController();
    public resourceController: ResourceController = new ResourceController();

    public constructor() {
        this.router = Router();
        this.routes();
    }

    public routes() {
        this.router.route('/')
            .get((_, res: Response) => {
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