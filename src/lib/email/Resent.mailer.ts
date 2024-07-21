import { IMailer } from "./IMailer";

export class ResendMailer implements IMailer {
  async sendEmail(): Promise<void> {
    console.log("Sending email using ResendMailer");
  }
}
