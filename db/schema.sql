CREATE DATABASE burgers_db;

use burgers_db;

create table burgers(
	id int auto_increment,
    burger_name varchar(30) not null,
    devoured boolean default false,
    date timestamp,
    primary key (id)
);