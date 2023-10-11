import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// const connectionString =
//     process.env.DATABASE_URL ||
//     "postgres:/postgres:postgres@localhost:5432/postgres";

const connectionString = "postgres://postgres:postgres@localhost:5432/postgres";

const client = postgres(connectionString);

export const dzClient = drizzle(client, { schema: schema });
