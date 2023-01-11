import {
    assertSpyCalls,
    spy,
} from "https://deno.land/std@0.171.0/testing/mock.ts";
import { consoleLogger } from "./consoleLogger.ts";

Deno.test("log", () => {
    const logSpy = spy(globalThis.console.log);
    globalThis.console.log = logSpy;
    consoleLogger.log("Oh, for the wings of any bird");
    assertSpyCalls(logSpy, 1);
});

Deno.test("info", () => {
    const infoSpy = spy(globalThis.console.info);
    globalThis.console.info = infoSpy;
    globalThis.console;
    consoleLogger.info("Oh, for the wings of any bird");
    assertSpyCalls(infoSpy, 1);
});

Deno.test("warn", () => {
    const warnSpy = spy(globalThis.console.warn);
    globalThis.console.warn = warnSpy;
    globalThis.console;
    consoleLogger.warn("Oh, for the wings of any bird");
    assertSpyCalls(warnSpy, 1);
});

Deno.test("error", () => {
    const errorSpy = spy(globalThis.console.error);
    globalThis.console.error = errorSpy;
    globalThis.console;
    consoleLogger.error("Oh, for the wings of any bird");
    assertSpyCalls(errorSpy, 1);
});
