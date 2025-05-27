# SQL
## what is database?
-An organised collection of data.A method to collect and store data in a structured way.
## why we need database?
-In exel we can store data but it is not easy to search and retrieve data in a **eficient** way for big amount of data.
## DBMS
-DBMS stands for Database Management System.
-It is software that helps to create, manage and manipulate databases.
-It provides an interface for users to interact with the database.
-Examples of DBMS include MySQL, PostgreSQL, Oracle, and Microsoft SQL Server.
## RDBMS
-RDBMS stands for Relational Database Management System.
-a type of database system that stores data in structured format, using rows and columns.
## SQL
-SQL stands for Structured Query Language.


## Create a database
-SELECT DATABASE database_name;

## Change database
-\c database_name;

## delete database
-DROP DATABASE database_name;

## LETS SEE CRUD OPERATION
-create
-read
-update
-delete

## create a table
-table is a collection of related data
- create table table_name(
    id INT,
    name varchar(100),
    city varchar(100),
)

## insert data into table
-INSERT INTO table_name (id, name, city) VALUES (1, 'John Doe', 'New York');

## read data from table
-SELECT * FROM table_name;
-SELECT column_name1,column_name2 FROM table_name;

## update data in table
-UPDATE table1 SET city='raybandh' WHERE id=1;

## delete data from table
-DELETE FROM table_name WHERE id=1;

## data type
-NUMERIC: INT,DECIMAL, FLOAT, DOUBLE

-DECIMAL(p, s): Fixed-point number, where p is the precision (total number of digits) and s is the scale (number of digits after the decimal point).

-varchar(n): Variable-length character string, where n is the maximum length.

-DATE: Date data type, used for storing dates.

-BOOLEAN: Boolean data type, used for true/false values.

-serial: Auto-incrementing integer, often used for primary keys.

## constraint
- Constraints are rules applied to columns in a table to enforce data integrity.

### primary key
-its constraint that uniquely identifies each row in a table.
-Each table can have only one primary key.
-The primary key must contain unique values and cannot contain NULL values.

### not null
- create table table_name(
    id INT NOT NULL,
    name varchar(100) NOT NULL,
    city varchar(100) NOT NULL,
)

### default
-create table table_name(
    id INT NOT NULL,
    name varchar(100) NOT NULL,
    city varchar(100) DEFAULT 'Unknown',
)

### auto increment(serial)
- create table table_name(
    id SERIAL PRIMARY KEY,
    name varchar(100) NOT NULL,
    city varchar(100) DEFAULT 'Unknown',
)
-we can set serial value using psql command
-select setval('tablename_columnname_seq', 1);

### all things together
-create table employee(
    emp_id serial primary key,
    fname varchar(50) not null,
    lname varchar(50) not null,
    email varchar(50) not null unique,
    department varchar(30),
    salary decimal(10,2) default 30000.00,
    hire_date date default current_date
)


## clauses
-using clauses we can give conditions to our query for filtering data.
-where
-order by

### where
-select * from table_name where id=1;
-select * from table_name where fname='John';
-we can use multiple conditions using AND, OR, NOT operators.
-select * from table_name where fname='John' AND lname='Doe';


### limit
select * from table_name limit 10;
-only shows the first 10 rows of the result.

### like
select * from table_name where fname like 'a%';
-starts with 'a' after that any character can be there.

select * from table_name where fname like '%a';
-ends with 'a' before that any character can be there.

select * from table_name where fname like '%a%';
-contains 'a' before and after that any character can be there.

select * from table_name where fname like '_a%';
-contains 'a' at second position before that any character can be there.

select * from table_name where fname like '__';
- any two characters can be there.

