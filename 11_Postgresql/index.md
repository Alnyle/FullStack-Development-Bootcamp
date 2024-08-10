

// sudo service postgresql status : check status of connect if the connection is open
// sudo passwd postgres : set a password to the server
// sudo -u postgres psql

# \l : (Small L) get all database in current server
# \c database_name : connect to specific database it's like use in sql server => \c test
# \d table_name : to see the whole table => \d games
# \! : EXIT



## thing relate to terminal 
* must end the line with ';'

## String
* string must be single quote => 'string'


// AUTO incrementing
// ALTER TABLE table_name ADD CONSTRAINT pk SERIAL PRIMARY KEY (column_name)


// ALTER TABLE 
* ALTER TABLE table_name ADD COLUMN img_url TYPE VARCHAR(length)
