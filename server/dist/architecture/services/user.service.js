"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
exports.findUserByEmail = findUserByEmail;
const user_model_1 = __importDefault(require("../models/user.model"));
const hashPassword_1 = require("../../utils/hashPassword");
async function createUser(email, password, fullName) {
    const hashed = await (0, hashPassword_1.hashPassword)(password);
    return user_model_1.default.create({ email, password: hashed, fullName });
}
async function findUserByEmail(email) {
    return user_model_1.default.findOne({ email });
}
//# sourceMappingURL=user.service.js.map