import { pgTable, pgSchema, text, uuid } from 'drizzle-orm/pg-core';

const authSchema = pgSchema('auth');

// the supabase auth users table
// there are many other fields, but these are the only ones we interact with
export const authUsersTable = authSchema.table('users', {
  id: uuid('id').primaryKey(),
});

export const usersTable = pgTable('users', {
  id: uuid('id')
    .primaryKey()
    .references(() => authUsersTable.id),
  email: text('email').unique().notNull(),
  name: text('name').notNull()
});
