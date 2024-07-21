import { Bcrypt } from "./Bcrypt";
import { IEncrypt } from "./IEncrypt";

class EncryptSingleton {
  private static instance: IEncrypt;

  private constructor() {}

  public static getInstance(): IEncrypt {
    if (!EncryptSingleton.instance) {
      EncryptSingleton.instance = new Bcrypt();
    }
    return EncryptSingleton.instance;
  }
}

const encryptInstance = EncryptSingleton.getInstance();
export default encryptInstance;
