"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnv = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
function getEnv() {
    if (process.env.NODE_ENV != "production")
        dotenv_1.default.config();
    return process.env;
}
exports.getEnv = getEnv;
//# sourceMappingURL=env.js.map