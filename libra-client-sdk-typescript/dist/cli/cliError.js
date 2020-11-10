export class CliError extends Error {
    constructor(message, e) {
        super(message);
        this.e = e;
    }
}
