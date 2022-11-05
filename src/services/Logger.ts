import { Header } from './../types/header';

export class Logger {
  private static instance: Logger;
  private header: Header;

  private constructor(_header: Header) {
    this.header = _header;
  }

  public static getInstance(params: Header): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger(params);
    }

    return Logger.instance;
  }

  public Error(message: string) {
    console.log(message);
    console.log(this.header);
  }
}
