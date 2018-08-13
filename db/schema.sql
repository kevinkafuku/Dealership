create database vehicles_db;

use vehicles_db;

create table vehicles (
id INTEGER(11) AUTO_INCREMENT NOT NULL,
vehicle_name varchar (200) NOT NULL,
driven BOOLEAN default False,
`date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);