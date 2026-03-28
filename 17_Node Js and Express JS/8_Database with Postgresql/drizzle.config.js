// Drizzle config - a configuration file that
// is used by Drizzle Kit and contains all the information about your 
// database connection, migration folder and schema files.

// drizzle-orm> Send and recive data data from database
// drizzle-kit> Migrate and generate types from schema files and UI for your DB

const { defineConfig } = require('drizzle-kit')
const dotenv = require("dotenv/config") 

// Database migration are a way to manage and version control changes to your database schema over time.
// It's save every change you make to your database schema in a separate file, called a migration file. This allows you to track changes, roll back to previous versions if needed, and collaborate with other developers on the same project.
const config = defineConfig({
    dialect: "postgresql", // or "mysql", "sqlite", "sqlserver"
    out: './drizzle', // this is where your migration files will be generated
    schema: './drizzle/schema.js', // this is where you define your database schema (tables, columns, etc.)
    dbCredentials: {
        url: process.env.DATABASE_URL, // this is your database connection string
    },
})

module.exports = config