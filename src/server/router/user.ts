import { createRouter } from "./context";
import * as argon2 from "argon2";
import { registerSchema } from "./schema";

export const userRouter = createRouter().mutation("register", {
  input: registerSchema,
  async resolve({ input, ctx }) {
    const { firstName, lastName, email, password, confirmPassword } = input;

    // Check if passwords match
    if (password.trim() !== confirmPassword.trim()) {
      return ctx.res?.status(400).json({ error: "Passwords do not match." });
    }

    // Hash password
    try {
      const hashedPassword = await argon2.hash(password);

      // Create a new user
      const user = await ctx.prisma.user.create({
        data: { firstName, lastName, email, password: hashedPassword },
      });

      // Return the user
      return { user };
    } catch (error) {
      return ctx.res?.status(500).json({ error: error });
    }
  },
});
