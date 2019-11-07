"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_module_1 = require("./../logger/logger.module");
const bookmarks_module_1 = require("./../bookmarks/bookmarks.module");
const mark_gateway_1 = require("./mark.gateway");
const users_module_1 = require("./../users/users.module");
const mongoose_1 = require("@nestjs/mongoose");
const mark_schema_1 = require("./mark.schema");
const marks_controller_1 = require("./marks.controller");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const marks_service_1 = require("./marks.service");
let MarksModule = class MarksModule {
};
MarksModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Mark', schema: mark_schema_1.MarkSchema }]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt', session: false }),
            users_module_1.UsersModule,
            logger_module_1.LoggerModule,
            common_1.forwardRef(() => bookmarks_module_1.BookmarksModule)
        ],
        exports: [marks_service_1.MarksService],
        providers: [marks_service_1.MarksService, mark_gateway_1.MarkGateway],
        controllers: [marks_controller_1.MarksController]
    })
], MarksModule);
exports.MarksModule = MarksModule;
//# sourceMappingURL=marks.module.js.map