import { z } from "zod";

export const GenericAPISchema = z.object({
  params: z.object({}),
  query: z.object({}),
  body: z.object({}),
});
