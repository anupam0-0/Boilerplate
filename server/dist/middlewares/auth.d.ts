import { Request, Response, NextFunction } from 'express';
import { IUser } from '../architecture/models/user.model';
declare global {
    namespace Express {
        interface Request {
            user?: IUser;
        }
    }
}
export declare const authMiddleware: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=auth.d.ts.map