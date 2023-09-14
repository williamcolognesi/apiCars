create database dbCars;

use dbCars;

create table carros (
codigo int primary key auto_increment,
marca varchar(20),
modelo varchar(30),
descricao varchar (100),
valor varchar(10),
);

select * from carros