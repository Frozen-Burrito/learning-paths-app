import { Response, NextFunction, Application} from 'express';
import { PathController } from '../controllers';

export class Routes {

    public pathController: PathController = new PathController();

    public routes(app: Application): void {
        app.route('/')
            .get((_, res: Response) => {
                res.status(200).send({
                    message: "Successful GET request"
                });
            });

        app.route('/paths')
            .get(this.pathController.getAllPaths)
            .post(this.pathController.addNewPath)

        app.route('/paths/:id')
            .put(this.pathController.editPath)
            .delete(this.pathController.deletePath);
    }
}