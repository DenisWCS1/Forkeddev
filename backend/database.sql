CREATE TABLE `user` (
	`id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`firstname` varchar(45) NOT NULL,
	`lastname` varchar(100) NOT NULL,
	`email` varchar(100) NOT NULL,
	`password` varchar(45) NOT NULL,
	`role` varchar(20) NOT NULL,
	`updated_on` DATETIME NOT NULL,
	`created_on` DATETIME NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `room` (
	`id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`fk_location` INT NOT NULL,
	`name` varchar(45) NOT NULL,
	`plan` varchar(255) NOT NULL,
	`url_picture` varchar(255) NOT NULL,
	`updated_on` DATETIME NOT NULL,
	`created_on` DATETIME NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `location` (
	`id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`city_name` varchar(45) NOT NULL,
	`updated_on` DATETIME NOT NULL,
	`created_on` DATETIME NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `reservation` (
	`id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`fk_user` INT NOT NULL,
	`fk_room` INT NOT NULL,
	`start_datetime` DATETIME(6) NOT NULL,
	`end_datetime` DATETIME(6) NOT NULL,
	`updated_on` DATETIME NOT NULL,
	`created_on` DATETIME NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `material` (
	`id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`name` varchar(100) NOT NULL,
	`updated_on` DATETIME NOT NULL,
	`created_on` DATETIME NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `room_material` (
	`id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`fk_room` INT NOT NULL,
	`fk_material` INT NOT NULL,
	`updated_on` DATETIME NOT NULL,
	`created_on` DATETIME NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `room` ADD CONSTRAINT `room_location` FOREIGN KEY (`fk_location`) REFERENCES `location`(`id`);

ALTER TABLE `reservation` ADD CONSTRAINT `reservation_user` FOREIGN KEY (`fk_user`) REFERENCES `user`(`id`);

ALTER TABLE `reservation` ADD CONSTRAINT `reservation_room` FOREIGN KEY (`fk_room`) REFERENCES `room`(`id`);

ALTER TABLE `room_material` ADD CONSTRAINT `room` FOREIGN KEY (`fk_room`) REFERENCES `room`(`id`);

ALTER TABLE `room_material` ADD CONSTRAINT `material` FOREIGN KEY (`fk_material`) REFERENCES `material`(`id`);


INSERT INTO user (`firstname`,`lastname`,`email`,`password`,`role`,`updated_on`,`created_on`)
VALUES 
('Valerie','Doe','valerie.doe@yopmail.com','0','user',NOW(),NOW()),
('Candice','Doe','candice.doe@yopmail.com','0','user',NOW(),NOW()),
('Jules','Doe','jules.doe@yopmail.com','0','user',NOW(),NOW()),
('Fortun','Houle','fortun.houle@yopmail.com','0','user',NOW(),NOW()),
('Leone','Sergio','leone.sergio@yopmail.com','0','user',NOW(),NOW()),
('Ella','Short','ella.short@yopmail.com','0','user', NOW(),NOW()),
('Claire','Ranclaud','claire.ranclaud@yopmail.com','0','user', NOW(),NOW()),
('Marion','Ney','marion.ney@yopmail.com','0','user', NOW(),NOW()),
('Denis','Dogger','denis.dogger@yopmail.com','0','user', NOW(),NOW()),
('David','Kouign_aman','david.kouing_aman@yopmail.com','0','user',NOW(),NOW()),
('Alban','Puh_Blik','alban.puh_blik@yopmail.com','0','user', NOW(),NOW()),
('Anthony','Kea','anthony.kea@yopmail.com','0','user', NOW(),NOW()),
('David','ExcessivementLofe','david.excessivementLofe@yopmail.com','0','user', NOW(),NOW()),
('Monica','Belelouchy','monica.belelouchy@yopmail.com','0','user', NOW(),NOW()),
('Erica','Hernandez','erica.hernandez@yopmail.com','0','user', NOW(),NOW()),
('Ahmed','Sahim','ahmed.sahim@yopmail.com','0','user', NOW(),NOW()),
('Apu ','Nahasa','anthony.kea@yopmail.com','0','user', NOW(),NOW()),
('Jo','Holt','jo.holt@yopmail.com','0','user', NOW(),NOW()),
('Guistino','Ladaguini','guistino.ladaguini@yopmail.com','0','user', NOW(),NOW()),
('Rodrigo','Amador','rodrigo.amador@yopmail.com','0','user', NOW(),NOW()),
('Claudette','Morineau','claudette.morineau@yopmail.com','0', 'user', NOW(),NOW()),
('Birgit','Hançer','birgit.hançer@yopmail.com','0','user', NOW(),NOW()),
('Elov','Bilir','elov.billir@yopmail.com','0','user', NOW(),NOW()),
('Youssef','Ixcell','youssef.ixcell@yopmail.com','0','user',NOW(),NOW()),
('Camila','Da SIva','camila.dasilva@yopmail.com','0','user', NOW(),NOW()),
('Al','Kleeber','al.kleeber@yopmail.com','0','user', NOW(),NOW()),
('Osborne','Quigley','osborne.quigley@yopmail.com','0','user', NOW(),NOW()),
('Anastasya','Jonet','anastasya.jonet@yopmail.com','0','user', NOW(),NOW()),
('Dimitri','Solid-Snake','dimitri.solid_snake@yopmail.com','0','user', NOW(),NOW()),
('Nikitas','Salahkis','nikitas.salahkis.kea@yopmail.com','0','user', NOW(),NOW());


INSERT INTO location (`city_name`,`updated_on`,`created_on`)
VALUES
('Nantes',NOW(),NOW()),
('Angers',NOW(),NOW()),
('Le Mans' ,NOW(),NOW());

INSERT INTO material (`name`,`updated_on`,`created_on`) 
VALUES 
('Câble VGA', NOW(),NOW()),
('Câble HDMI', NOW(),NOW()),
('Câble DVI', NOW(),NOW()),
('Machine à café', NOW(),NOW()),
('Fontaine à eau', NOW(),NOW()),
('Markers', NOW(),NOW()),
('Écran TV', NOW(),NOW()),
('Accès PMR', NOW(),NOW()),
('Vidéo projecteur', NOW(),NOW());

INSERT INTO room (`fk_location`,`name`,`plan`,`url_picture`,`updated_on`,`created_on`)
VALUES 
(1,'Loire','map','url_picture',NOW(),NOW()),
(1,'Sarthe','map','url_picture',NOW(),NOW()),
(2,'Acheneau','map','url_picture',NOW(),NOW()),
(2,'Divatte','map','url_picture',NOW(),NOW()),
(3,'Sèvre','map','url_picture',NOW(),NOW()),
(3,'Le Brivet','map','url_picture',NOW(),NOW()),
(1,'Loire','map','url_picture',NOW(),NOW()),
(2,'Namnettes','map','url_picture',NOW(),NOW()),
(3,'Zen','map','url_picture',NOW(),NOW());