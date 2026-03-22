use("ecommerce");
//update one
// set new price
db.products.updateOne(
    {name:"Wireless Mouse"},
    { $set :{price:899}}
)
//update many
// increase stock price of electronic items by 10.
db.products.updateMany(
    { category: "Electronics" },
    { $inc: { stock: 10 } }
)

// push 
// Using $push to Add to Arrays

db.products.updateOne(
    { name: "Wireless Mouse" },
    { $push: { tags: "new" } }
)
