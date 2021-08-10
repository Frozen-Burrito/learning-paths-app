import { Request, Response } from 'express';
import { ResourceModel } from '../models';
import { Resource } from '../../index';
import Log from '../utils/logger';

export class ResourceController {

    public async getResources(req: Request, res: Response) {
        try {
            const resources: Array<Resource> = await ResourceModel.find({});

            return res.status(200).json({
                count: resources.length,
                data: resources
            });
        } catch (error) {
            Log.error(error.message);
            return res.status(500).json({
                error: error.message
            });
        }
    }

    public async getResourceById(req: Request, res: Response) {
        try {
            let resource = await ResourceModel.findById( req.params.id );

            if (!resource) {
                Log.warn(`No resource with id '${req.params.id}'`);
                return res.status(404).json({
                    error: 'No resource with specified id'
                });
            }

            return res.status(200).json({
                data: resource
            });
        } catch (error) {
            Log.error(error.message);
            return res.status(500).json({
                error: error.message
            });
        }
    }

    public async addResource(req: Request, res: Response) {
        try {
            const newResource: Resource = await ResourceModel.create(req.body);

            return res.status(201).json({
                data: newResource
            });
        } catch (error) {
            Log.error(error.message);
            return res.status(500).json({
                error: error.message
            });
        }
    }

    public async editResource(req: Request, res: Response) {
        try {
            let resource = await ResourceModel.findById( req.params.id );

            if (!resource) {
                Log.warn(`No resource with id '${req.params.id}'`);
                return res.status(404).json({
                    error: 'No resource with specified id'
                });
            }

            resource.set( req.body );
            const updatedResource = await resource.save();

            return res.status(200).json({
                data: updatedResource
            });
        } catch (error) {
            Log.error(error.message);
            return res.status(500).json({
                error: error.message
            });
        }
    }

    public async deleteResource(req: Request, res: Response) {
        try {
            const resource = await ResourceModel.findById(req.params.id);

            if (!resource) {
                Log.warn(`No resource with id '${req.params.id}'`);
                return res.status(404).json({
                    error: 'No resource with specified id'
                });
            }

            await resource.remove();

            return res.status(204);
        } catch (error) {
            Log.error(error.message);
            return res.status(500).json({
                error: error.message
            });
        }
    }
}
