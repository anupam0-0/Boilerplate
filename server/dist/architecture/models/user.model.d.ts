import { Document } from "mongoose";
export interface IUser extends Document {
    fullName: string;
    email: string;
    password: string;
    role: "user" | "admin";
}
declare const UserModel: import("mongoose").Model<IUser, {}, {}, {}, Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default UserModel;
//# sourceMappingURL=user.model.d.ts.map