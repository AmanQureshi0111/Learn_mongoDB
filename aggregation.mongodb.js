use("ecommerce");
// total revenue fof all orders
db.orders.aggregate([
{ $group: { _id: null, totalRevenue: { $sum: "$total" } } }
])
//group by status
db.orders.aggregate([
{ $group: { _id: "$status", totalOrders: { $sum: 1 } } }
])

// Aggregation Pipeline
db.sales.aggregate([
    { $match: { category: "Fruit" } },
    { $project:{_id:0,item:1,price:1}}
])
//group and totals

db.sales.aggregate([
    {
        $group: {
        _id: "$category",
        totalSales: { $sum: { $multiply: ["$price", "$quantity"] } }
        }
    }
]);

//sort results
db.sales.aggregate([
    {
        $group: {
        _id: "$category",
        totalSales: { $sum: { $multiply: ["$price", "$quantity"] } }
        }
    },
    {   $sort: { totalSales: -1 }
    }
]);

// match and group
db.sales.aggregate([
    { $match: { category: "Fruit" } },
    {
    $group: {
    _id: null,
    totalFruitSales: { $sum: { $multiply: ["$price", "$quantity"] } }
    }
    }
]);
