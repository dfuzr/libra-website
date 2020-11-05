export declare class CliError extends Error {
    e: Error;
    constructor(message: string, e: Error);
}
