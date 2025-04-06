"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    app: {
        name: process.env.APPLICATION_NAME,
        version: process.env.APPLICATION_VERSION,
        port: Number(process.env.APPLICATION_PORT)
    },
    db: {
        dialect: process.env.DATABASE_DIALECT,
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME
    },
    swagger: {
        title: process.env.SWAGGER_TITLE,
        desc: process.env.SWAGGER_DESCRIPTION,
        version: process.env.SWAGGER_VERSION
    }
});
//# sourceMappingURL=configuration.js.map