import { Request, Response } from 'express';
import { ObjectID } from 'bson';

import { PathModel, ResourceModel } from '../models';
import { Path, Resource, Step } from '../../index';
import Log from '../utils/logger';

export class PathController {
    
    public async getAllPaths(req: Request, res: Response) {
        try {
            const paths: Array<Path> = await PathModel.find({});
            const existingRes: Array<Resource> = [];
            
            for (let path of paths) {
                const resourceData: Array<Resource> = [];

                for (let resource of path.resources) {
                    let id = resource.toString();
                    if (typeof id == "string") {
                        let resourceObj: Resource | null = 
                        existingRes.find(resource => resource._id == id) 
                        || await ResourceModel.findById(id);

                        if (resourceObj) resourceData.push(resourceObj);
                    }
                }

                path.resources = resourceData;
            };

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

    public async getReducedPaths(req: Request, res: Response) {
        try {
            throw new Error('Not implemented');
        } catch (error) {
            Log.error(error.message);
            return res.status(500).json({
                error: error.message
            });
        }
    }

    public async getPathById(req: Request, res: Response) {
        try {
            const path = await PathModel.findById( req.params.id );
            
            if (!path) {
                Log.warn(`No resource with id '${req.params.id}'`);
                return res.status(404).json({
                    error: 'No resource with specified id'
                });
            }
            
            const resourceData: Array<Resource> = new Array<Resource>();

            for (let resourceId of path.resources) {
                if (typeof resourceId.toString() == "string") {
                    const resourceObj: Resource | null = await ResourceModel.findById(resourceId);

                    if (resourceObj) {
                        resourceData.push(resourceObj);
                    }
                }
            }

            path.resources = resourceData;

            return res.status(200).json({
                data: path
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
            let steps: Array<Step> = req.body.steps;
            let resourceIDs: Array<string> = [];

            if (resources && resources.length > 0) {

                for (let newResource of resources) {
                    const existingResource = await ResourceModel.findOne({ 'resourceUrl': newResource.resourceUrl });

                    if (existingResource) {
                        resourceIDs.push(existingResource._id);
                        continue;
                    }

                    newResource._id = new ObjectID().toHexString();
                    let createdResource: Resource = await ResourceModel.create(newResource);
                    resourceIDs.push(createdResource._id);
                }
            }

            steps = steps && steps.map(step => {
                return {...step, _id: new ObjectID().toHexString()}
            });

            req.body = {
                ...req.body,
                _id: new ObjectID().toHexString(),
                resources: resourceIDs,
                steps
            };

            console.log(req.body);

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

            req.body.modifiedAt = Date.now();
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

            return res.status(204);
        } catch (error) {
            Log.error(error.message);
            return res.status(500).json({
                error: error.message
            });
        }
    }
}