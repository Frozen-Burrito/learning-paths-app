import { Request, Response } from 'express';
import { PathModel, ResourceModel } from '../models';
import { Path, Resource } from '../models/types';
import Log from '../utils/logger';

export class PathController {
    
    public async getAllPaths(req: Request, res: Response) {
        try {
            const paths:object[] = await PathModel.find({});

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
            const resources: Array<Resource> = req.body.resources;
            let resourceIDs: Array<string> = [];

            if (resources && resources.length > 0) {
               
                let newResource: Resource;

                for (newResource of resources) {
                    console.log(newResource);
                    const existingResource = await ResourceModel.findOne({ 'resourceUrl': newResource.resourceUrl });

                    if (existingResource) {
                        resourceIDs.push(existingResource._id);
                        continue;
                    }

                    let createdResource: Resource = await ResourceModel.create(newResource);
                    resourceIDs.push(createdResource._id);
                }
            }

            req.body.resources = resourceIDs;
            const newPath: Path = await PathModel.create(req.body);

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
            let path: any = await PathModel.findById( req.params.id );

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
            const path: any = await PathModel.findById(req.params.id);

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