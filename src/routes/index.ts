import { Response, Router } from 'express';
import { PathController } from '../controllers/pathController';
import { ResourceController } from '../controllers/resourceController';
import { UserController } from '../controllers/userController';
import { verifyAuth } from '../utils/authMiddleware';

export class ApiRouter {

    public router: Router;

    public pathController: PathController = new PathController();
    public resourceController: ResourceController = new ResourceController();
    public userController: UserController = new UserController();

    public constructor() {
        this.router = Router();
        this.routes();
    }

    public routes() {
        this.router.route('/')
            .get((_, res: Response) => {
                res.status(200).send({
                    message: "API version: 0.3.0"
                });
            });

        this.router.route('/paths')
            .get(this.pathController.getAllPaths)
            .post(verifyAuth, this.pathController.addNewPath);

        this.router.route('/paths/:id')
            .get(this.pathController.getPathById)
            .put(verifyAuth, this.pathController.editPath)
            .delete(verifyAuth, this.pathController.deletePath);

        this.router.route('/resources')
            .get(this.resourceController.getResources)
            .post(verifyAuth, this.resourceController.addResource);

        this.router.route('/resources/:id')
            .get(this.resourceController.getResourceById)
            .put(verifyAuth, this.resourceController.editResource)
            .delete(verifyAuth, this.resourceController.deleteResource);

        this.router.post('/users/signup', this.userController.createUser);
        this.router.post('/users/login', this.userController.loginUser);
        this.router.get('/users/logout', this.userController.logout);
    }
}