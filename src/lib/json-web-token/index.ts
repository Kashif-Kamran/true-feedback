import { IJwt } from "./IJwt";
import { JsonWebToken } from "./JsonWebToken";

class JsonWebTokenSingleton {
  private static instance: IJwt;

  private constructor() {}

  public static getInstance(): IJwt {
    if (!JsonWebTokenSingleton.instance) {
      JsonWebTokenSingleton.instance = new JsonWebToken();
    }
    return JsonWebTokenSingleton.instance;
  }
}

const jwtCreatorInstance = JsonWebTokenSingleton.getInstance();
export default jwtCreatorInstance;
