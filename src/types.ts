/**
 * TYPES
 */
import * as z from "zod";

export const TEMPLATE_VERSION = "v.0.0.7";

const EmailRegistration = z.object({
    email: z.string().email()
});

export { EmailRegistration };
