export function getEnv() {
    if (typeof process !== 'undefined' && process.env.NODE_ENV) {
        return process.env.NODE_ENV;
    }
    // default environment
    return 'development';
}
export function isEnv(env) {
    return getEnv() === env;
}
export function isProduction() {
    return isEnv('production') === true;
}
export function isDevelopment() {
    return isEnv('development') === true;
}
export function isTest() {
    return isEnv('test') === true;
}
//# sourceMappingURL=environment.js.map