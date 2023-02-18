

create table employees (
    id INT (11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY(id)
);


INSERT INTO employees VALUES(1,'Joe',1000);
INSERT INTO employees VALUES(2,'Henry',2000);
INSERT INTO employees VALUES(3,'Sam',2500);
INSERT INTO employees VALUES(4,'Max',1500);
