declare const _default: () => {
    app: {
        name: string | undefined;
        version: string | undefined;
        port: number;
    };
    db: {
        dialect: string | undefined;
        host: string | undefined;
        port: string | undefined;
        username: string | undefined;
        password: string | undefined;
        database: string | undefined;
    };
    swagger: {
        title: string | undefined;
        desc: string | undefined;
        version: string | undefined;
    };
};
export default _default;
