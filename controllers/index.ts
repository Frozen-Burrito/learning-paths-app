import { Request, Response } from 'express';
import { Path } from '../models';
import Log from '../utils/logger';

export class PathController {
    
    public async getAllPaths(req: Request, res: Response) {
        try {
            const paths:object[] = await Path.find({});

            return res.status(200).json({
                count: paths.length,
                data: paths
            });
        } catch (error) {
            Log.error(error.message);
            return res.status(500).json({
                error: error.message
            });
        }
    }

    public async addNewPath(req: Request, res: Response) {
        try {
            const newPath: typeof Path = await Path.create(req.body);

            return res.status(201).json({
                data: newPath
            });
        } catch (error) {
            Log.error(error.message);
            return res.status(500).json({
                error: error.message
            });
        }
    }

    public async editPath(req: Request, res: Response) {
        try {
            let path = await Path.findById( req.params.id );

            if (!path) {
                Log.warn(`No resource with id '${req.params.id}'`);
                return res.status(404).json({
                    error: 'No resource with specified id'
                });
            }

            path.set( req.body );
            const updatedPath = await path.save();

            return res.status(200).json({
                data: updatedPath
            });
        } catch (error) {
            Log.error(error.message);
            return res.status(500).json({
                error: error.message
            });
        }
    }

    public async deletePath(req: Request, res: Response) {
        try {
            const path = await Path.findById(req.params.id);

            if (!path) {
                Log.warn(`No resource with id '${req.params.id}'`);
                return res.status(404).json({
                    error: 'No resource with specified id'
                });
            }

            await path.remove();

            return res.status(200);
        } catch (error) {
            Log.error(error.message);
            return res.status(500).json({
                error: error.message
            });
        }
    }
}