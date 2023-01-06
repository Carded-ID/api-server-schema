import { z } from "zod";
import { GenericAPISchema } from "./api";

const UserSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const UserAPISignInSchema = GenericAPISchema.pick({ body: true }).extend({
  body: UserSchema.pick({ email: true, password: true }),
});
const UserAPISignUpSchema = GenericAPISchema.pick({ body: true }).extend({
  body: UserSchema.pick({ email: true, password: true }),
});

export { UserSchema, UserAPISignInSchema, UserAPISignUpSchema };
