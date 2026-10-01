import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const reports = sqliteTable('reports', {id:text('id').primaryKey(),payload:text('payload').notNull()});
export const patients = sqliteTable('patients', {id:text('id').primaryKey(),name:text('name').notNull(),info:text('info').notNull()});
export const appointments = sqliteTable('appointments',{id:text('id').primaryKey(),patientId:text('patient_id').notNull().references(()=>patients.id),date:text('date').notNull(),time:text('time').notNull(),reason:text('reason').notNull(),kind:text('kind').notNull(),duration:integer('duration').notNull()});
export const operations = sqliteTable('operations',{id:text('id').primaryKey(),year:integer('year').notNull(),month:integer('month').notNull(),type:text('type').notNull(),outcome:text('outcome').notNull()});
export const tasks = sqliteTable('tasks',{id:text('id').primaryKey(),title:text('title').notNull(),detail:text('detail').notNull(),tag:text('tag').notNull(),color:text('color').notNull(),completed:integer('completed',{mode:'boolean'}).notNull().default(false)});
