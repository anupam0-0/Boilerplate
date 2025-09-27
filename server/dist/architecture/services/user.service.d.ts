import { IUser } from "../models/user.model";
export declare function createUser(email: string, password: string, fullName: string): Promise<IUser>;
export declare function findUserByEmail(email: string): Promise<IUser | null>;
//# sourceMappingURL=user.service.d.ts.map