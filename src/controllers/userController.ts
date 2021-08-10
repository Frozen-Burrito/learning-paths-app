import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { UserModel } from '../models';
import { generateToken } from '../utils/userTokens';
import Log from '../utils/logger';

export class UserController {

    public async createUser(req: Request, res: Response) {
        try {
            const { username, email } = req.body;
            const existingUser = await UserModel.findOne({ $or: [{email}, {username}] });

            if (existingUser) {
                throw new Error('User already exists');
            }

            const newUser = await UserModel.create(req.body);
            
            if (!process.env.JWT_SECRET) {
                throw new Error('There is no jwt secret');
            }

            const token = generateToken(newUser._id, process.env.JWT_SECRET);
            res.setHeader('x-auth-token', token);

            return res.status(201).json({
                user: newUser._id,
                token: token,
                duration: '1h'
            });

        } catch (error) {
            if (error.code === 11000) {
                return res.status(400).json({
                    error: 'The username or email is already linked to an existing account'
                });
            }

            Log.error(error.message);
            return res.status(500).json({
                error: error
            });
        }
    }

    public async loginUser(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            const user = await UserModel.findOne({ email });

            if (!user) throw new Error('Invalid email');
            
            const match = await bcrypt.compare(password, user.password);

            if (!match) throw new Error('Incorrect password');

            if (!process.env.JWT_SECRET) {
                throw new Error('There is no jwt secret');
            }

            const token = generateToken(user._id, process.env.JWT_SECRET);
            res.setHeader('x-auth-token', token);

            return res.status(200).json({ 
                user: user._id,
                token: token,
                duration: '1h' 
            });

        } catch (error) {
            Log.error(error.message);
            return res.status(400).json({
                error: 'Failed to authenticate the user'
            });
        }   
    }

    public logout(_: Request, res: Response) {
        res.setHeader('x-auth-token', '');
        return res.status(200).send();
    }
}