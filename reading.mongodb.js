use("ecommerce");
//find all
// db.products.find()
//pretty find
// db.products.find().pretty();
//find whose name is wireless mouse
// db.products.find({name:"Wireless Mouse"});
//price greater than 1000
// db.products.find({price:{}})

//see only specific values
// db.products.find({},{name:true,price:true,_id:false});
//sorting and limiting 
//for pagination
db.products.find().sort({price:-1}).skip(1).limit(2)
//sort() -> sort the data
//where sort(1) means ascending , sort(-1) means descending
//skip(y)-> skip first y data
//limit(x)-> show only first x-y data after skipping y data 
