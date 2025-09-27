import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
    fullName: string
	email: string;
	password: string;
	role: "user" | "admin";
}

const userSchema = new Schema<IUser>({
	fullName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
    role: {
        type: String,
		enum: ["user", "admin"],
        default: "user"
    }
});

const UserModel = model<IUser>("User", userSchema);
export default UserModel;
