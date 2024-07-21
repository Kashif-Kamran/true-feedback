import { z } from "zod";
// Singular Feilds Validations
export const messageContentValidation = z
  .string()
  .min(10, {
    message:
      "Message content is too short. It cannot be less than 10 characters",
  })
  .max(500, {
    message:
      "Message content is too long. It cannot be more than 500 characters",
  });

//
const MessageValidationSchema = z.object({
  content: messageContentValidation,
});
