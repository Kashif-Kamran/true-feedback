import { z } from "zod";
// Singular Feilds Validation
export const usernameValidation = z
  .string()
  .min(4, { message: "Username too short" })
  .max(30, { message: "Username too long" })
  .regex(/^[a-zA-Z0-9]^/, {
    message: "Username doesn't support special characters",
  });
export const userEmailValidation = z
  .string()
  .email({ message: "Provide valid email" }); // TODO: Can improve using regex
export const userPasswordValidation = z
  .string()
  .min(8, { message: "Password must be 8 character long" })
  .min(24, { message: "Password must not be 24 character long`" });
//
export const UserValidationSchema = z.object({
  username: usernameValidation,
  email: userEmailValidation,
  password: userPasswordValidation,
});
