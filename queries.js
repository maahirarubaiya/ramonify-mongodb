// Ramonify – MongoDB Queries
// Run with: mongosh ramonify queries.js

// -----------------------------------------------------
// Query 1: Aggregation Framework
// Total spending per category across all transactions
// -----------------------------------------------------
print("Query 1: Total spending per category");
printjson(db.transactions.aggregate([
    { $match: { type: "expense" } },
    { $group: {
        _id: "$category.name",
        totalSpent: { $sum: "$amount" },
        count: { $sum: 1 }
    }},
    { $sort: { totalSpent: -1 } }
]).toArray());

// -----------------------------------------------------
// Query 2: Complex Search Criterion
// Find expense transactions that are over $100 OR tagged as recurring
// -----------------------------------------------------
print("Query 2: Expenses over $100 OR tagged as recurring");
printjson(db.transactions.find({
    type: "expense",
    $or: [
        { amount: { $gt: 100 } },
        { "tags.name": "recurring" }
    ]
},
{ description: 1, amount: 1, "category.name": 1, tags: 1 }).toArray());

// -----------------------------------------------------
// Query 3: Count documents for a specific user
// Count how many transactions Maahira has made
// -----------------------------------------------------
print("Query 3: Count transactions for Maahira");
printjson(db.transactions.countDocuments({
    userID: ObjectId("64b1f2e3a1b2c3d4e5f60001")
}));

// -----------------------------------------------------
// Query 4: Update a document based on a query parameter
// Toggle a transaction type from expense to income (flip)
// -----------------------------------------------------
print("Query 4: Flip transaction type for a specific transaction");
const tx = db.transactions.findOne({ 
    _id: ObjectId("64b1f2e3a1b2c3d4e5f60013") 
});
const newType = tx.type === "expense" ? "income" : "expense";
db.transactions.updateOne(
    { _id: ObjectId("64b1f2e3a1b2c3d4e5f60013") },
    { $set: { type: newType } }
);
print("Updated transaction type to: " + newType);

// -----------------------------------------------------
// Query 5: Find all users who have a budget over $200
// Uses dot notation to query embedded documents
// -----------------------------------------------------
print("Query 5: Users with a budget limit over $200");
printjson(db.users.find(
    { "budgets.limitAmount": { $gt: 200 } },
    { name: 1, email: 1, budgets: 1 }
).toArray());