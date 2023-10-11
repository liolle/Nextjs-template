import { relations, sql } from "drizzle-orm";
import {
    pgTable,
    smallint,
    text,
    timestamp,
    unique,
    varchar
} from "drizzle-orm/pg-core";

// Schemas

export const Users = pgTable("Users", {
    id: varchar("id", { length: 8 }).primaryKey(),
    email: varchar("email", { length: 100 }).unique().notNull(),
    username: varchar("username", { length: 100 }).unique().notNull(),
    role: smallint("role")
        .notNull()
        .references(() => User_role.id, { onDelete: "set null" }),
    created_at: timestamp("created_at").default(sql`now()`)
});

export const User_role = pgTable("User_role", {
    id: smallint("id").primaryKey(),
    name: varchar("name", { length: 50 }).notNull()
});

export const Accounts = pgTable(
    "Accounts",
    {
        id: varchar("id", { length: 12 }).primaryKey(),
        password: varchar("password", { length: 128 }),
        user_id: varchar("user_id", { length: 8 })
            .notNull()
            .references(() => Users.id, { onDelete: "cascade" }),
        type: smallint("type")
            .notNull()
            .references(() => Account_type.id, { onDelete: "set null" }),
        picture: text("picture")
            .notNull()
            .default(
                "https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png"
            )
    },
    (t) => ({
        id_type: unique().on(t.user_id, t.type)
    })
);

export const Account_type = pgTable("Account_type", {
    id: smallint("id").primaryKey(),
    name: varchar("name", { length: 50 }).notNull()
});

// Relations

export const UserRelations = relations(Users, ({ one, many }) => ({
    role: one(User_role, {
        fields: [Users.role],
        references: [User_role.id]
    }),
    accounts: many(Accounts)
}));

export const AccountRelation = relations(Accounts, ({ one }) => ({
    user: one(Users, {
        fields: [Accounts.user_id],
        references: [Users.id]
    }),
    type: one(Account_type, {
        fields: [Accounts.type],
        references: [Account_type.id]
    })
}));
