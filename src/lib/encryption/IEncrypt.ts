export interface IEncrypt {
  encrypt(payload: string): Promise<string>;
  dcrypt(encryptedPayload: string): Promise<string>;
  compare(unhashedValue: string, hashedValue: string): Promise<boolean>;
}
