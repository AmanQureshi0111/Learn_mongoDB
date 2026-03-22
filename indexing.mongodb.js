use("ecommerce");

//create index
db.products.createIndex({name:1});  // Ascending index on 'name' field

// View Indexes
db.products.getIndexes() // List all indexes on 'products' collection

/*
Should you always create indexes?
While indexes improve read performance, they can slow down write operations
(inserts, updates, deletes) because the index must also be updated. Therefore, it’s
essential to create indexes thoughtfully based on your application’s query patterns
*/