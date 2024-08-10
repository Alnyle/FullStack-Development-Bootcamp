

## basic commands
-- to close the connection : exit
-- to establish connection: mongosh
-- clean screen: cls

-- show list of all current database : show dbs
-- to use database: use databaseName

## DDL => Data definition language

-- create database
   use newDatabase (even if not exist it will create it)

-- delete database 
   db.dropDatabase()

## create collection

-- create collection table (entity)
   db.createCollection("collectionName")


## create new collection and insert one record same time

-- db.collectionsName.insertOne({}) even if does exist it will create it

   example:
   db.students.insertOne({name:"Ahmed", age: 24, gpa: 2.8})

## insert many records

-- insert it as array of object
-- db.collectionsName.insertMany([{}, {}, {}]) even if does exist it will create it

   example:
   db.students.insertMany([{name:"Ahmed", age: 24, gpa: 2.8}, {name:"Ali", age: 24, gpa: 3.8}, {name:"kim", age: 22, gpa: 3.2}])

## show data in a collection

-- db.collectionName.find()
   
   example:
   db.students.find()


## Data types

-- string: "Ahmed"
-- integers: 23
-- double: 23.2
-- null: unkown value
-- array: []
-- nested docs: address: { street: '123 Fake st.', city: 'Bikini Bo', zip: 13422 }
-- date: new Date('2023-02-02T00:00:00) || current time
-- date: new Date()