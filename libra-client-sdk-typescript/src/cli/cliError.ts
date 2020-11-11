export class CliError extends Error {
  constructor(message: string, public e: Error) {
    super(message);
  }
}
