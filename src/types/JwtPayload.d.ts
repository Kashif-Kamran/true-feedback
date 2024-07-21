declare interface JwtPayload {
  aud?: string; // Audience
  iat?: number; // Issued At
  exp?: number; // Expiration Time
  iss?: string; // Issuer (optional)
  sub: string; // Subject (optional)
}
