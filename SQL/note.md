# SQL
## what is database?
- An organised collection of data.A method to collect and store data in a structured way.
## why we need database?
- In exel we can store data but it is not easy to search and retrieve data in a **eficient** way for big amount of data.
## DBMS
- DBMS stands for Database Management System.
- It is software that helps to create, manage and manipulate databases.
- It provides an interface for users to interact with the database.
- Examples of DBMS include MySQL, PostgreSQL, Oracle, and Microsoft SQL Server.
## RDBMS
- RDBMS stands for Relational Database Management System.
- a type of database system that stores data in structured format, using rows and columns.
## SQL
- SQL stands for Structured Query Language.


## Create a database
- CREATE DATABASE database_name;

## Change database
- \c database_name;

## delete database
- DROP DATABASE database_name;

## LETS SEE CRUD OPERATION
- create
- read
- update
- delete

## create a table
- table is a collection of related data
- create table table_name(
    id INT,
    name varchar(100),
    city varchar(100),
)

## insert data into table
- INSERT INTO table_name (id, name, city) VALUES (1, 'John Doe', 'New York');

## read data from table
- SELECT * FROM table_name;
- SELECT column_name1,column_name2 FROM table_name;

## update data in table
- UPDATE table1 SET city='raybandh' WHERE id=1;

## delete data from table
- DELETE FROM table_name WHERE id=1;

## data type
- NUMERIC: INT,DECIMAL, FLOAT, DOUBLE

- DECIMAL(p, s): Fixed-point number, where p is the precision (total number of digits) and s is the scale (number of digits after the decimal point).

- varchar(n): Variable-length character string, where n is the maximum length.

- DATE: Date data type, used for storing dates.

- BOOLEAN: Boolean data type, used for true/false values.

- serial: Auto-incrementing integer, often used for primary keys.

## constraint
- Constraints are rules applied to columns in a table to enforce data integrity.

### primary key
- its constraint that uniquely identifies each row in a table.
- Each table can have only one primary key.
- The primary key must contain unique values and cannot contain NULL values.

### not null
- create table table_name(
    id INT NOT NULL,
    name varchar(100) NOT NULL,
    city varchar(100) NOT NULL,
)

### default
- create table table_name(
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
- we can set serial value using psql command
- select setval('tablename_columnname_seq', 1);

### all things together
- create table employee(
    emp_id serial primary key,
    fname varchar(50) not null,
    lname varchar(50) not null,
    email varchar(50) not null unique,
    department varchar(30),
    salary decimal(10,2) default 30000.00,
    hire_date date default current_date
)


## CLAUSE
- using clauses we can give conditions to our query for filtering data.
- where
- order by

### where
- select * from table_name where id=1;
- select * from table_name where fname='John';
- we can use multiple conditions using AND, OR, NOT operators.
- select * from table_name where fname='John' AND lname='Doe';


### limit
select * from table_name limit 10;
- only shows the first 10 rows of the result.

### like
- select * from table_name where fname like 'a%';
- starts with 'a' after that any character can be there.

select * from table_name where fname like '%a';
- ends with 'a' before that any character can be there.

select * from table_name where fname like '%a%';
- contains 'a' before and after that any character can be there.

select * from table_name where fname like '_a%';
- contains 'a' at second position before that any character can be there.

select * from table_name where fname like '__';
- any two characters can be there.

### AND:
SELECT * FROM Customers
WHERE Country = 'Brazil'
AND City = 'Rio de Janeiro'
AND CustomerID > 50;


### OR:
SELECT * FROM Customers
WHERE City = 'Berlin' OR CustomerName LIKE 'G%' OR Country = 'Norway';


### combine and or:
SELECT * FROM Customers
WHERE Country = 'Spain' AND (CustomerName LIKE 'G%' OR CustomerName LIKE 'R%');

### instead of using multiple OR conditions we can use IN
- select * from table_name where fname IN ('John', 'Doe', 'Jane');

### NOT:
SELECT * FROM Customers
WHERE NOT Country = 'Spain';

### BETWEEN
- Between a certain range :Where price BETWEEN 50 AND 100

### DISTINCT
- SELECT DISTINCT column_name FROM table_name;
- Used to return only distinct (different) values.

### ORDER BY
- SELECT * FROM table_name ORDER BY price:sort table in accessing order based on price
- SELECT * FROM table_name ORDER BY price DESC :sort table in descending order based on price
- SELECT * FROM table_name ORDER BY price DESC,name ASC:1st priority is price if multiple name has same price then its sort according to descending order of name

## Aggregate Functions
- Aggregate functions perform a calculation on a set of values and return a single value.
- Common aggregate functions include:

  - COUNT(): Returns the number of rows that match a specified condition.
  select count(*) from employee;

  - SUM(): Returns the total sum of a numeric column.
    select sum(salary) from employee;

  - AVG(): Returns the average value of a numeric column.
    select avg(salary) from employee;


  - MIN(): Returns the minimum value in a set.
    select min(salary) from employee;

  - MAX(): Returns the maximum value in a set.
    select max(salary) from employee;

## GROUP BY
- we can grouping the result set by using common values in specified columns.
#### select department , count(*) from employee group by department;
->in this query we are show department by grouping employee department,also in this count is this number of row count of same group.

- SELECT department, sum(salary) FROM employee GROUP BY department;

## STRING FUNCTIONS

### some functions:
- concat,concat_ws
->add two or more strings together.
#### select concat(fname, lname) from employee;
->give a result without any name of column so we can use as alias
#### select emp_id, concat('fname',' ','lname') as fullname from employee;

->concat_ws is used for adding separator between strings.(1st argument is separator)
#### select concat_ws(' ', fname, lname) as full_name from employee;

- substr
->extract a substring from a string.
#### select substr(fname, 1, 3) as name_code from employee;

-  replace
->replace a substring within a string.
->1st arg column name,2nd is substring to be replaced, 3rd is new substring.
#### select replace(fname, 'John', 'Jane') as updated_name from employee;

- reverse
#### select reverse(fname) from employee;

- length
#### select length(fname) from employee;

- upper ,lower
#### select upper(fname) from employee;
#### select lower(fname) from employee;

- left,right
#### select right(fname,3) from employee;
#### select left(fname,3) from employee;

- trim,ltrim,rtrim
#### select trim(fname) from employee;
#### select ltrim(fname) from employee;
#### select rtrim(fname) from employee;

- position
#### select position('John' in fname) from employee;
->return the position where j is found in fname.

- string_agg


## Altering Tables
- we can add,drop,modify columns in a table using ALTER TABLE command.

### Add a column
#### alter table employee add column phone varchar(20) default '';

### Drop a column
#### alter table employe drop column phone;

### rename a column or table name
#### alter table employee rename column emp_id to id;
#### alter table employee rename to staff;


### Modify a column
- set a new data type for a column
#### alter table employee alter column fname set data type varchar(150)
- set not null constraint
#### alter table employee alter column fname set not null;
- set default value
#### alter table employee alter column fname set default 'Unknown';


## Check Constraint
- use for data validation and verification.
- add check constraint:
#### alter table employee add column mob varchar(15) check (length (mob)>=10)

-> we can add constrain after creating column
#### alter table employee add constraint check_mob_check CHECK(length(mob)>=10);

- delete check constraint:
#### alter table employee drop constraint constraint_name;
->constraint name can be found using \d command in psql.


## case expression
#### select fname,id,
#### case
#### when salary > 60000 then 'HIGH'
#### else 'LOW'
#### end as scale
#### from employee


## RELATIONSHIP
- A relationship is a connection between two or more tables in a database.

## foreign key
- when a table use abother table's primary key as a reference then it is called foreign key.
#### create table employee (
#### id serial primary key,
#### name varchar(100),
#### dept varchar(100),
#### salary numeric
#### );

#### create table department (
#### id int,
#### name varchar(100),
#### foreign key (id) references employee(id)
#### );

-SELECT name, dept, salary
FROM t
WHERE (dept, salary) IN (
    SELECT dept, MAX(salary)
    FROM t
    GROUP BY dept
);

## view 
- A view is a virtual table that is based on the result of a SELECT query.
#### create view view_name as

## index
 - btree index is the default type of index in PostgreSQL.
 - Indexes are used to speed up the retrieval of rows from a table.
 - inpostgresql index name is unique across the database.
 - Syntax to create an index:

 #### create index index_name on table_name (column_name);
 #### drop index index_name;