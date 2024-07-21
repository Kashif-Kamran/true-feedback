import { IEncrypt } from "./IEncrypt";
import bcrypt from "bcryptjs";
export class Bcrypt implements IEncrypt {
  async encrypt(payload: string): Promise<string> {
    const SALT = 8;
    const hash = bcrypt.hashSync(payload, SALT);
    return hash;
  }
  async dcrypt(encryptedPayload: string): Promise<string> {
    throw new Error("Bcrypt doesn't provide Dcryption Api");
  }
  async compare(unhashedValue: string, hashedValue: string): Promise<boolean> {
    return await bcrypt.compare(unhashedValue, hashedValue);
  }
}
