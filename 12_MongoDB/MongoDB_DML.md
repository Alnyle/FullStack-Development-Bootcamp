
## Sort Data

-- db.collectionName.find().sort({fieldName: (-1) reverse || 1 (normal)})
   db.students.find().sort({name: 1})

## limit number of record return it in query
-- db.collectionName.find().sort({filedName: fieldName: (-1) reverse || 1 (normal)}).limit(number Of record)  
   db.students.find().sort({gpa: -1}).limit(1)


## find use

-- 
   db.collectionName.find({query}, {projection});
   db.students.find({name: "Omar"}, {gpa: 1})

-- db.collectionName.find({query1, query2}, {projection});
   db.students.find({name: "Omar", gap: 2.9}, {gpa: 1})


## Update field collection

-- update base on fieldName
   db.collectionName.updateOne({query}, {$set:{fieldName: value}})

   example
   db.students.updateOne({name: "Ahmed"}, {$set{fullTime: true}})

-- update base on object id
   db.students.updateOne({_id: ObjectId('66926c66898755a342c4e49b')}, {$set{fullTime: true}})


## remove a field

-- -- update base on fieldName
   db.collectionName.updateOne({query}, {$unset:{fieldName: ""}})

   example
   db.students.updateOne({name: "Ahmed"}, {$set{fullTime: "" }})


## update many : note even the record does have that field it will create it
   db.collectionName.updateMany({query}, {$set:{fieldName: value}})

   example
   db.students.updateMany({name: "Ahmed"}, {$set{fullTime: true}})

   or 
    db.students.updateMany({}, {$set{fullTime: true}})


## update many: only in case that record have the name field

-- db.collectionName.updateMany({fieldName: {$exists:false}}, {$set: {FiledName: true}});

   db.students.updateMany({fullTime: {$exists: false}}, {$set: {fullTime: true}});



## delete one record

db.collectionName.deleteOne({fieldName: value});

db.students.deleteOne({name: "Ali"});


## delete one Records

-- db.collectionName.deleteMany({filedName: value})

   db.students.deleteMany({fullTime: false})

## delete any does have specific field

-- db.collectionName.deleteMany({FieldName: {$exists: false}})

   db.students.deleteMany({registerDate: {$exists: false}})