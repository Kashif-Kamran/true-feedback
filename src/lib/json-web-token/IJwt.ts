export interface IJwt {
  signToken(jwtPayload: JwtPayload): Promise<string>;
}
