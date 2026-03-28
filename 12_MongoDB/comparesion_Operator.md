
## $ne: Not Operator

--  db.collectionName.find(filedName: {$ne: value})
    db.students.find({name: {$ne: "Ahmed"}})

## lt: less than Operator <
--  db.collectionName.find(filedName: {$lt: value})
    db.students.find({age: {$lt:22}})


## lt: less than or equal Operator <=
--  db.collectionName.find(filedName: {$lte: value})
    db.students.find({age: {$lte:22}})

## gt: greater than >
--  db.collectionName.find(filedName: {$gt: value})
    db.students.find({age: {$gt:22}})


## gt: greater than or equal =>
--  db.collectionName.find(filedName: {$gte: value})
    db.students.find({age: {$gte:22}})


## range of value

--  db.collectionName.find({fieldName: {$gte:value, $lte:value}})

    db.students.find({gpa: {$gte:3, $lte:4}})


## in Operator: search in array

--  db.students.find({fieldName: {$in: [values]}})

    db.students.find({name: {$in: ["Ahmed", "Omar"]}})


    
## nin: not in Operator search in array

--  db.students.find({fieldName: {$nin: [values]}})

    db.students.find({name: {$nin: ["Ahmed", "Omar"]}})


