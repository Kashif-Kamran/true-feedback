export interface IMailer {
  sendEmail(): Promise<void>;
}
