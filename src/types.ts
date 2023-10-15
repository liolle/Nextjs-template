/**
 * TYPES
 */
import * as z from "zod";

export type ExampleType = "Next";
export const TEMPLATE_VERSION = "v.0.0.5";

const EmailRegistration = z.object({
    email: z.string().email()
});

export { EmailRegistration };
