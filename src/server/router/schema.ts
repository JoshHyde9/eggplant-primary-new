import { z } from "zod";

// Register user schema
export const registerSchema = z.object({
  firstName: z.string().min(1, { message: "Please fill in required field." }),
  lastName: z.string().min(1, { message: "Please fill in required field." }),
  email: z.string().email({ message: "Please input a valid email address" }),
  password: z.string().min(4, {
    message: "Password must be greater than 3 characters long.",
  }),
  confirmPassword: z.string().min(4, {
    message: "Password must be greater than 3 characters long.",
  }),
});
