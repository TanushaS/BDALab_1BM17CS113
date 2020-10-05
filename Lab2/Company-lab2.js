//insert using 3 methods department
db.Department.insert({_id:1,Name:"CSE",NoOfEmp:200,HOD:"Tanmoy"})
db.Department.update({_id:2,Name:"ISE",NoOfEmp:100},{$set:{HOD:"Bob"}},{upsert:true})
db.Department.save({_id:3,Name:"ECE",NoOfEmp:300,HOD:"Tom"})
db.Department.insert({_id:4,Name:"EEE",NoOfEmp:200,HOD:"John"})
db.Department.insert({_id:5, Name:"MECH",NoOfEmp:400,HOD:"Sean"})


//insert using 3 methods into employee
db.Employee.insert({_id: 1,name: "Tanmoy", age: 25, salary: 120000, position: "CEO"})
db.Employee.update({_id: 2,name: "Michael", age: 26, salary: 580000},{$set:{position: "CFO"}},{upsert:true})
db.Employee.save({_id: 3,name: "Jim", age: 30, salary: 500000, position: "Junior Associate"})
db.Employee.insert({_id: 4,name: "William", age: 25, salary: 520000, position: "CFO"})
db.Employee.insert({_id: 5,name: "Mark", age: 25, salary: 920000, position: "COO"})

//update to add another field to Employee collection
db.Employee.update({_id:1},{$set:{DeptNum:1002}})
db.Employee.update({_id:2},{$set:{DeptNum:1007}})
db.Employee.update({_id:3},{$set:{DeptNum:1004}})
db.Employee.update({_id:4},{$set:{DeptNum:1010}})
db.Employee.update({_id:5},{$set:{DeptNum:1005}})

//remove a field from employee collection
db.Employee.update({_id:3},{$unset:{age:30}})


//find all documents in both the collections
db.Employee.find()
db.Department.find()

//select emp name and dept num where dept num is between 1001 and 1005
db.Employee.find({DeptNum: {$gt : 1000, $lt : 1006}},{name:1,DeptNum:1})

//find all employees with age greater than 25
db.Employee.find({age:{$gt:25}})

//find names of all employees with name starting with T
db.Employee.find({name:/^T/})