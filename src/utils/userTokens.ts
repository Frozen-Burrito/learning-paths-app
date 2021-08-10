import * as jwt from 'jsonwebtoken';

export function generateToken(
    id: string, 
    secret: jwt.Secret, 
    duration: string | number = '1h'): string {

    return jwt.sign({
        userId: id
    }, secret, { expiresIn: duration });
}