import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema.js";

const connectionString = process.env.DATABASE_URL as string;

const client = postgres(connectionString);

export const dzClient = drizzle(client, { schema: schema });
