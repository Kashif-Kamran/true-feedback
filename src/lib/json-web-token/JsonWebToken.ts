import { IJwt } from "./IJwt";
import jwt from "jsonwebtoken";
//
export class JsonWebToken implements IJwt {
  async signToken({
    sub,
    iat = Date.now(),
    aud = "all",
    exp = Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60,
    iss,
  }: JwtPayload): Promise<string> {
    return jwt.sign({ sub, iat, aud, exp, iss }, "kashifkamranalvi");
  }
}
