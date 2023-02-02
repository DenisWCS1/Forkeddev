CREATE TABLE `user` (
	`id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`firstname` varchar(45) NOT NULL,
	`lastname` varchar(100) NOT NULL,
	`email` varchar(100) NOT NULL,
	`password` varchar(45) NOT NULL,
	`role` varchar(20) NOT NULL,
	`created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	`updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);

CREATE TABLE `room` (
	`id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`fk_location` INT NOT NULL,
	`name` varchar(45) NOT NULL,
	`plan` varchar(255) NOT NULL,
	`url_picture` varchar(255) NOT NULL,
	`created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	`updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);

CREATE TABLE `location` (
	`id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`city_name` varchar(45) NOT NULL,
	`created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	`updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);

CREATE TABLE `reservation` (
	`id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`fk_user` INT NOT NULL,
	`fk_room` INT NOT NULL,
	`start_datetime` DATETIME(6) NOT NULL,
	`end_datetime` DATETIME(6) NOT NULL,
	`created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	`updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);

CREATE TABLE `material` (
	`id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`name` varchar(100) NOT NULL,
	`created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	`updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);

CREATE TABLE `room_material` (
	`id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`fk_room` INT NOT NULL,
	`fk_material` INT NOT NULL,
	`created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	`updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);

ALTER TABLE `room` ADD CONSTRAINT `room_location` FOREIGN KEY (`fk_location`) REFERENCES `location`(`id`);

ALTER TABLE `reservation` ADD CONSTRAINT `reservation_user` FOREIGN KEY (`fk_user`) REFERENCES `user`(`id`);

ALTER TABLE `reservation` ADD CONSTRAINT `reservation_room` FOREIGN KEY (`fk_room`) REFERENCES `room`(`id`);

ALTER TABLE `room_material` ADD CONSTRAINT `room` FOREIGN KEY (`fk_room`) REFERENCES `room`(`id`);

ALTER TABLE `room_material` ADD CONSTRAINT `material` FOREIGN KEY (`fk_material`) REFERENCES `material`(`id`);


INSERT INTO user (`firstname`,`lastname`,`email`,`password`,`role`)
VALUES 
('Valerie','Doe','valerie.doe@yopmail.com','0','user'),
('Candice','Doe','candice.doe@yopmail.com','0','user'),
('Jules','Doe','jules.doe@yopmail.com','0','user'),
('Fortun','Houle','fortun.houle@yopmail.com','0','user'),
('Leone','Sergio','leone.sergio@yopmail.com','0','user'),
('Ella','Short','ella.short@yopmail.com','0','user'),
('Claire','Ranclaud','claire.ranclaud@yopmail.com','0','user'),
('Marion','Ney','marion.ney@yopmail.com','0','user'),
('Denis','Dogger','denis.dogger@yopmail.com','0','user'),
('David','Kouign_aman','david.kouing_aman@yopmail.com','0','user'),
('Alban','Puh_Blik','alban.puh_blik@yopmail.com','0','user'),
('Anthony','Kea','anthony.kea@yopmail.com','0','user'),
('David','ExcessivementLofe','david.excessivementLofe@yopmail.com','0','user'),
('Monica','Belelouchy','monica.belelouchy@yopmail.com','0','user'),
('Erica','Hernandez','erica.hernandez@yopmail.com','0','user'),
('Ahmed','Sahim','ahmed.sahim@yopmail.com','0','user'),
('Apu ','Nahasa','anthony.kea@yopmail.com','0','user'),
('Jo','Holt','jo.holt@yopmail.com','0','user'),
('Guistino','Ladaguini','guistino.ladaguini@yopmail.com','0','user'),
('Rodrigo','Amador','rodrigo.amador@yopmail.com','0','user'),
('Claudette','Morineau','claudette.morineau@yopmail.com','0', 'user'),
('Birgit','Hançer','birgit.hançer@yopmail.com','0','user'),
('Elov','Bilir','elov.billir@yopmail.com','0','user'),
('Youssef','Ixcell','youssef.ixcell@yopmail.com','0','user'),
('Camila','Da SIva','camila.dasilva@yopmail.com','0','user'),
('Al','Kleeber','al.kleeber@yopmail.com','0','user'),
('Osborne','Quigley','osborne.quigley@yopmail.com','0','user'),
('Anastasya','Jonet','anastasya.jonet@yopmail.com','0','user'),
('Dimitri','Solid-Snake','dimitri.solid_snake@yopmail.com','0','user'),
('Nikitas','Salahkis','nikitas.salahkis.kea@yopmail.com','0','user');


INSERT INTO location (`city_name`)
VALUES
('Nantes'),
('Angers'),
('Le Mans' );

INSERT INTO material (`name`) 
VALUES 
('Câble VGA'),
('Câble HDMI'),
('Câble DVI'),
('Machine à café'),
('Fontaine à eau'),
('Markers'),
('Écran TV'),
('Accès PMR'),
('Vidéo projecteur');

INSERT INTO room (`fk_location`,`name`,`plan`,`url_picture`)
VALUES 
(1,'Loire','map','url_picture'),
(1,'Sarthe','map','url_picture'),
(2,'Acheneau','map','url_picture'),
(2,'Divatte','map','url_picture'),
(3,'Sèvre','map','url_picture'),
(3,'Le Brivet','map','url_picture'),
(1,'Loire','map','url_picture'),
(2,'Namnettes','map','url_picture'),
(3,'Zen','map','url_picture');