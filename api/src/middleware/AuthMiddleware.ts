
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IUser } from '../types/Types';
import User from '../modals/User';

interface IDecodedToken {
    userId: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: IUser;
        }
    }
}


export const authenticate = async (req: Request, res: Response, next: NextFunction) => {

    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'No token provided, authorization denied' });
    }
    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as IDecodedToken;
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).json({ message: 'User not found, authorization denied' });
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token, authorization denied' });
    }
};
