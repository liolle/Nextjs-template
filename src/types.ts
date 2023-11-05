/**
 * TYPES
 */
import * as z from "zod";

export const TEMPLATE_VERSION = "v.0.0.6";

const EmailRegistration = z.object({
    email: z.string().email()
});

export { EmailRegistration };
