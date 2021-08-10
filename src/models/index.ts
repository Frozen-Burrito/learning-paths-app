import { model } from 'mongoose';
import { Path, Resource, User } from '../../index';
import PathSchema from './Path';
import ResourceSchema from './Resource';
import UserSchema from './User';

export const PathModel = model<Path>('Path', PathSchema);
export const ResourceModel = model<Resource>('Resource', ResourceSchema);
export const UserModel = model<User>('User', UserSchema);