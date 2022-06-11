"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const x_core_1 = __importDefault(require("x-core"));
const http_1 = __importDefault(require("http"));
function log() {
    console.log("i am the x-cli package");
    console.log("i reference the x-core package: ", (0, x_core_1.default)());
    console.log("i am change!");
}
log();
exports.default = log;
http_1.default.createServer((req, res) => {
    res.end("hello, x-core!, like");
}).listen(3000);
//# sourceMappingURL=index.js.map