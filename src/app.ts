import { autoinject } from 'aurelia-dependency-injection';
import * as $ from "jquery";
import { PostClient, PhoneMessage } from "./resources/client"

@autoinject()
export class App {
  private _apiClient: PostClient;
  message = 'Hello World!';
  phoneNumber: number;
  textMessage: string;

  constructor() {
    this._apiClient = new PostClient('http://localhost:9001');
  }

  testTexting() {
    const phoneMessage = new PhoneMessage({
      phone_number: this.phoneNumber,
      message: this.textMessage
    });
    this._apiClient.sms(phoneMessage);
  }
}
