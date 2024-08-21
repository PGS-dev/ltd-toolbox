export class RequestError extends Error {
  constructor(
    public status: number,
    public text: string,
    public cause: string = '(no description provided)'
  ) {
    super();
    this.name = this.constructor.name;
    this.message = `${status} ${text} - ${this.cause}`;
  }
}
