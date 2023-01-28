import { z } from "zod";
import { GenericAPISchema } from "./api";

const ProfileSchema = z.object({
  username: z.string(),
  name: z.string(),
});

const ProfileAPICreateProfileSchema = GenericAPISchema.extend({
  body: ProfileSchema.pick({ username: true, name: true }),
});

const ProfileAPIGetProfileSchema = GenericAPISchema.extend({
  params: ProfileSchema.pick({ username: true }),
});

const ProfileAPIUpdateProfileSchema = GenericAPISchema.extend({
  params: ProfileSchema.pick({ username: true }),
  body: ProfileSchema.pick({ username: true, name: true }),
});

const ProfileAPIDeleteProfileSchema = GenericAPISchema.extend({
  params: ProfileSchema.pick({ username: true }),
});

export {
  ProfileSchema,
  ProfileAPICreateProfileSchema,
  ProfileAPIGetProfileSchema,
  ProfileAPIUpdateProfileSchema,
  ProfileAPIDeleteProfileSchema,
};
