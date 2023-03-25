"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers");
const body_parser_1 = __importDefault(require("body-parser"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = 8000;
    }
    userRoutes() {
        this.app.use('/users', controllers_1.userController.router);
    }
    useMiddlewares() {
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.useMiddlewares();
            this.userRoutes();
            this.app.listen(this.port, () => {
                console.log(`Server is listening on ${this.port}`);
            });
        });
    }
}
exports.App = App;
(() => __awaiter(void 0, void 0, void 0, function* () {
    const app = new App();
    yield app.init();
}))();
