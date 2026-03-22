use("ecommerce");
//delete one
db.contacts.deleteOne({name:"Alice"});
//delete Many
db.orders.deleteMany({ status: "Delivered" })