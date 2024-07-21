import { IMailer } from "./IMailer";
import { ResendMailer } from "./Resent.mailer";

class MailerSingleton {
  private static instance: IMailer;

  private constructor() {}

  public static getInstance(): IMailer {
    if (!MailerSingleton.instance) {
      // Resend mailer integerated
      MailerSingleton.instance = new ResendMailer();
    }
    return MailerSingleton.instance;
  }
}

const mailerInstance = MailerSingleton.getInstance();
export default mailerInstance;
