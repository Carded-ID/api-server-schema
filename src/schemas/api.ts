import { z } from "zod";

export const GenericAPISchema = z.object({
  params: z.undefined().or(z.any()),
  query: z.undefined().or(z.any()),
  body: z.undefined().or(z.any()),
});
