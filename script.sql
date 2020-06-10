CREATE SCHEMA IF NOT EXISTS tryflix DEFAULT CHARACTER SET utf8 ;

USE tryflix ;

CREATE TABLE IF NOT EXISTS genre (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  genre VARCHAR(25) NOT NULL
);

CREATE TABLE IF NOT EXISTS series (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(70) NOT NULL,
  description VARCHAR(500) NOT NULL,
  releaseDate DATETIME NOT NULL,
  liked TINYINT DEFAULT 0,
  genre_id INT NOT NULL,
  FOREIGN KEY (genre_id) REFERENCES genre (id)
);

INSERT INTO genre (genre) VALUES
('Fantasia'), ('Ficção Científica'), ('Drama'), ('Comédia'), ('Ficção Policial'), ('Crime');

INSERT INTO series (name, description, releaseDate, genre_id) VALUES
('The Witcher', 'O personagem de Cavill é um mutante caçador de monstros, que luta para encontrar seu lugar em um mundo onde as pessoas provam com frequência serem mais perversas que as bestas.', '2019-12-20', 1),
('Dark', 'Quatro diferentes famílias vivem em uma pequena cidade alemã. Suas vidas pacatas são completamente atormentadas quando duas crianças desaparecem misteriosamente e os segredos obscuros das suas famílias começam a ser desvendados.', '2017-12-01', 2),
('Peaky Blinders', 'Série sobre uma família de gângsteres na Inglaterra no começo do século 20.', '2013-09-12', 3),
('Vikings', 'A série acompanha a saga dos navegadores nórdicos que exploram - e conquistam - novos territórios nos tempos medievais.', '2013-03-03', 3),
('Friends', 'Seis amigos, três homens e três mulheres, enfrentam a vida e os amores em Nova York e adoram passar o tempo livre na cafeteria Central Perk.', '1994-09-22', 4),
('Brooklyn Nine_Nine', 'Jake Peralta é um detetive brilhante e ao mesmo tempo imaturo, que nunca precisou se preocupar em respeitar as regras. Tudo muda quando um capitão exigente assume o comando de seu esquadrão e Jake deve aprender a trabalhar em equipe.', '2013-09-17', 4),
('Black Mirror', 'Contos de ficção científica que refletem o lado negro das telas e da tecnologia, mostrando que nem toda novidade traz só benefícios.', '2011-12-04', 2),
('Breaking Bad', 'O professor de química Walter White não acredita que sua vida possa piorar ainda mais. Quando descobre que tem câncer terminal, Walter decide arriscar tudo para ganhar dinheiro enquanto pode, transformando sua van em um laboratório de metanfetamina.', '2008-01-20', 5),
('Mind hunter', 'Mindhunter é uma série de televisão norte-americana de drama policial criada por Joe Penhall, e baseada no livro Mind Hunter: Inside the FBI’s Elite Serial Crime Unit escrito por John E. Douglas e Mark Olshaker.', '2017-10-13', 6);

DELIMITER $$
CREATE PROCEDURE getAllSeries()
BEGIN
SELECT
id,
name,
liked
FROM tryflix.series;
END $$
DELIMITER ;

DELIMITER $$

CREATE PROCEDURE getOneSeries(
IN id int
)
BEGIN
SELECT
s.id,
s.name,
g.genre,
s.description,
s.releaseDate,
s.liked
FROM tryflix.series s
INNER JOIN tryflix.genre g
on s.genre_id = g.id
where s.id = id;
END $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE getAllFavoriteSeries()
BEGIN
SELECT
id,
name
FROM tryflix.series
where liked = 1;
END $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE updateLikedSeries(
IN liked TINYINT, id INT
)
BEGIN
UPDATE series s
	SET s.liked = liked
where s.id = id;
END $$
DELIMITER ;
