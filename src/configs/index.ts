// NPM modules
import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});

export interface ConfigInterface {
  APP_PORT: number;
  MONGO_URI: string;
  JWT_SECRET: string;
}

export class Config implements ConfigInterface {
  public APP_PORT: number;
  public MONGO_URI: string;
  public JWT_SECRET: string;


  public constructor() {
    // Logs the env variables
    console.log('process.env.NODE_ENV :', process.env.NODE_ENV);
    console.log('process.env.APP_PORT :', process.env.APP_PORT);
    this.APP_PORT = Number(process.env.APP_PORT);
    this.MONGO_URI = process.env.MONGO_URI;
    this.JWT_SECRET = process.env.JWT_SECRET;
  }
}
export default new Config();
