# ramonify-mongodb
# Ramonify – MongoDB Personal Finance Database
**CS 3200: Database Design**
Professor John Alexis Guerra Gómez
Maahira Rubaiya

---

## Project Overview

Ramonify is a personal finance tracking database adapted from a relational (SQL) model to a document-based (MongoDB) model. Users can log financial transactions, organize them into spending categories, and set monthly budgets per category to monitor their financial health.

---

## Repository Structure

| File | Description |
|------|-------------|
| `requirements_and_schema.pdf` | Requirements document and UML Class Diagram (reused from Project 1) |
| `hierarchical_model.png` | Hierarchical logical data model for MongoDB |
| `collections.json` | JSON examples of the main MongoDB collections with comments |
| `users.json` | Test data for the users collection |
| `transactions.json` | Test data for the transactions collection |
| `dump/ramonify/` | MongoDB dump files to restore the database |
| `queries.js` | Five MongoDB queries with documentation |

---

## Collections

The database has 2 main collections:

- **users** — stores user profiles with embedded accounts and budgets
- **transactions** — stores individual income/expense events with embedded category and tags

---

## How to Initialize the Database

### Option 1 — Using mongoimport (recommended)

Make sure MongoDB is running, then run:

```bash
mongoimport --db ramonify --collection users --file users.json --jsonArray
mongoimport --db ramonify --collection transactions --file transactions.json --jsonArray
```

### Option 2 — Using mongorestore (from dump)

```bash
mongorestore --db ramonify dump/ramonify/
```

### Option 3 — Using Mongo Compass

1. Open Mongo Compass and connect to `mongodb://localhost:27017`
2. Create a new database called `ramonify`
3. Create a collection called `users` and import `users.json`
4. Create a collection called `transactions` and import `transactions.json`

---

## How to Run Queries

```bash
mongosh ramonify queries.js
```

---

## AI Usage Disclosure

**AI Tool Used:** Claude (claude.ai)

**How I Used It:**
- Asked AI to explain MongoDB concepts and document modeling in more detail
- Asked AI to explain hierarchical data modeling and JSON structure concepts in depth
- Asked AI to explain MongoDB query syntax and how queries work
- Got feedback on my work to improve quality

**What I Did Myself:**
- Designed the hierarchical logical model and decided which data to embed vs reference
- Built the LucidChart diagram myself
- Wrote the requirements document and collection examples
- Made all final design decisions
- Ran all imports and verified the data in MongoDB

AI was used as a tutor and reviewer. All design decisions and analysis are my own.
