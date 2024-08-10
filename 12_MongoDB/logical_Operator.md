
# logical Operators

## and operator
--  db.collectionName.find({$and: [condition1, condition2]})

    db.students.find({$and: [{fullTime: true}, {age: {$lte: 22}}]})


## nor operator

--  db.collectionName.find({$nor: [condition1, condition2]})

    db.students.find({$nor: [{fullTime: true}, {age: {$lte: 22}}]})


## not operator

--  db.collectionName.find({filedName: {$not: {$gte: 30}}})

    db.students.find({age: {$not: {$lte: 21}}})