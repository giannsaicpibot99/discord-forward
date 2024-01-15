"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = void 0;
const fs_1 = require("fs");
function getConfig() {
    if (!(0, fs_1.existsSync)("./config.json"))
        (0, fs_1.writeFileSync)("./config.json", JSON.stringify({}));
    const config = JSON.parse((0, fs_1.readFileSync)("./config.json").toString());
    return config;
}
exports.getConfig = getConfig;
//# sourceMappingURL=config.js.map