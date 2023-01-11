export type logger = {
    readonly log: (message: string) => void;
    readonly info: (message: string) => void;
    readonly warn: (message: string) => void;
    readonly error: (message: string) => void;
};
