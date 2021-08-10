import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { generateToken } from './userTokens';

export function verifyAuth (req: Request, res: Response, next: NextFunction) {

    const authHeader = req.headers['x-auth-token'];
    
    if (authHeader && typeof authHeader === 'string') 
    {
        const token = authHeader.split('Bearer ')[1];

        if (token && typeof process.env.JWT_SECRET !== 'undefined') {
            try {
                const authData = <any>jwt.verify(token, process.env.JWT_SECRET);

                // Refresh the token for each request
                const newToken = generateToken(authData.userId, process.env.JWT_SECRET);
                res.setHeader('x-auth-token', newToken);

                next();
            } catch (error) {
                console.log(error);
                return res.status(401).json({
                    success: false,
                    message: 'Unable to authenticate the user',
                    error: error
                });
            }
        } else {
            return res.status(403).json({
                success: false,
                message: 'The authentication token does not have the correct format'
            });
        }
        
    } else {
        return res.status(403).json({
            success: false,
            message: 'No token provided'
        });
    }
}