use ("users")
// db.Employees.insertMany([
//     {
//         "name": "John Doe",
//         "empId": "2301730001",
//         "department": "Engineering",
//         "email": "john.doe@example.com",
//         "salary": 75000,
//         "bonus": 5000,
//     },
//     {
//         "name": "Jane Smith",
//         "empId": "2301730002",
//         "department": "Marketing",
//         "email": "jane.smith@example.com",
//         "salary": 65000,
//         "bonus": 5000,
//     },
//     {
//         "name": "Michael Johnson",
//         "empId": "2301730003",
//         "department": "Sales",
//         "email": "michael.johnson@example.com",
//         "salary": 70000,
//         "bonus": 4000,
//     },
//     {
//         "name": "Sarah Williams",
//         "empId": "2301730004",
//         "department": "Human Resources",
//         "email": "sarah.williams@example.com",
//         "salary": 60000,
//         "bonus": 3000,
//     },
//     {
//         "name": "David Brown",
//         "empId": "2301730005",
//         "department": "Finance",
//         "email": "david.brown@example.com",
//         "salary": 75000,
//         "bonus": 5000,
//     }
// ]); 

// db.Employees.updateOne(
//     { "empId": "2301730003" },
//     { $set: { "salary": 72000 } }
// );
// db.Employees.deleteOne({ "empId": "2301730004" });
// db.Employees.aggregate([
//     {
//         $match: { "department": "Engineering" }
//     },
//     {
//         $sort: { "salary": -1 }
//     },
//     {
//         $project: {
//             "name": 1,
//             "salary": 1,
//             "department": 1,
//             "_id": 0
    
//         }
//     }
// ]);
db.Employees.aggregate([
    {
        $group: {
            "_id": "$department",
            "totalSalary": { $sum: { $add: ["$salary","$bonus"] } }
        }
    }
]);
// db.Employees.find().pretty();


