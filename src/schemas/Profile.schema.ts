import { z } from "zod";
import { GenericAPISchema } from "./api";

const ProfileSchema = z.object({
  username: z.string(),
  name: z.string(),
});

const ProfileAPICreateProfileSchema = GenericAPISchema.pick({
  body: true,
}).extend({
  body: ProfileSchema.pick({ username: true, name: true }),
});

const ProfileAPIGetProfileSchema = GenericAPISchema.pick({
  params: true,
}).extend({
  params: ProfileSchema.pick({ username: true }),
});

const ProfileAPIUpdateProfileSchema = GenericAPISchema.pick({
  params: true,
  body: true,
}).extend({
  params: ProfileSchema.pick({ username: true }),
  body: ProfileSchema.pick({ username: true, name: true }),
});
export {
  ProfileSchema,
  ProfileAPICreateProfileSchema,
  ProfileAPIGetProfileSchema,
  ProfileAPIUpdateProfileSchema,
};
