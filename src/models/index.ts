import { model } from 'mongoose';
import PathSchema from './Path';
import ResourceSchema from './Resource';

export const PathModel = model('Path', PathSchema);
export const ResourceModel = model('Resource', ResourceSchema);