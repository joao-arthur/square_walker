import { logger } from "../logger.ts";

function log(message: string): void {
    globalThis.console.log(message);
}

function info(message: string): void {
    globalThis.console.info(message);
}

function warn(message: string): void {
    globalThis.console.warn(message);
}

function error(message: string): void {
    globalThis.console.error(message);
}

export const consoleLogger: logger = {
    log,
    warn,
    info,
    error,
};
