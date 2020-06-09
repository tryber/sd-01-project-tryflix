CREATE DATABASE IF NOT EXISTS project_tryflix;
USE project_tryflix;

CREATE TABLE IF NOT EXISTS genre (
  id_genre INT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
  type VARCHAR(45) NOT NULL
  ) ENGINE = InnoDB;

INSERT INTO genre (type) VALUES
('Fantasia'),
('Ficção Científica'),
('Drama'),
('Comédia'),
('Ficção Policial'),
('Crime');

CREATE TABLE IF NOT EXISTS series (
  id INT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  genre_id INT NOT NULL,
  description VARCHAR(1000) NOT NULL,
  release_date DATE NOT NULL,
  favorite INT NOT NULL,
  image VARCHAR(70) NOT NULL,
    FOREIGN KEY (genre_id)
    REFERENCES project_tryflix.genre (id_genre)
) ENGINE = InnoDB;

INSERT INTO series (name, description, release_date, favorite, image, genre_id)
VALUES
('The Witcher', 'O personagem de Cavill é um mutante caçador de monstros, que luta para encontrar seu lugar em um mundo onde as pessoas provam com frequência serem mais perversas que as bestas', '2019/12/20', 0, "http://localhost:3001/the_witcher.png", 1),
('Dark', 'Quatro diferentes famílias vivem em uma pequena cidade alemã. Suas vidas pacatas são completamente atormentadas quando duas crianças desaparecem misteriosamente e os segredos obscuros das suas famílias começam a ser desvendados.', '2017/12/01', 0, 'http://localhost:3001/dark.png', 2),
('Peaky Blinders', 'Série sobre uma família de gângsteres na Inglaterra no começo do século 20.', '2013/09/12', 0, 'http://localhost:3001/peaky_blinders.png', 3),
('Vikings', 'A série acompanha a saga dos navegadores nórdicos que exploram - e conquistam - novos territórios nos tempos medievais.', '2013/03/03', 0, 'http://localhost:3001/vikings.png', 3),
('Friends', 'Seis amigos, três homens e três mulheres, enfrentam a vida e os amores em Nova York e adoram passar o tempo livre na cafeteria Central Perk.', '1994/09/22', 0, 'http://localhost:3001/friends.png', 4),
('Brooklyn Nine-Nine', 'Jake Peralta é um detetive brilhante e ao mesmo tempo imaturo, que nunca precisou se preocupar em respeitar as regras. Tudo muda quando um capitão exigente assume o comando de seu esquadrão e Jake deve aprender a trabalhar em equipe.', '2013/09/17', 0, 'http://localhost:3001/brooklyn_nine_nine.png', 4),
('Black Mirror', 'Contos de ficção científica que refletem o lado negro das telas e da tecnologia, mostrando que nem toda novidade traz só benefícios.', '2011/12/04', 0, 'http://localhost:3001/black_mirror.png', 2),
('Breaking Bad', 'O professor de química Walter White não acredita que sua vida possa piorar ainda mais. Quando descobre que tem câncer terminal, Walter decide arriscar tudo para ganhar dinheiro enquanto pode, transformando sua van em um laboratório de metanfetamina.', '2008/01/20', 0, 'http://localhost:3001/breaking_bad.png', 5),
('Mindhunter', 'Mindhunter é uma série de televisão norte-americana de drama policial criada por Joe Penhall, e baseada no livro Mind Hunter: Inside the FBI’s Elite Serial Crime Unit escrito por John E. Douglas e Mark Olshaker.', '2017/10/13', 0, 'http://localhost:3001/mind_hunter.png', 6);

DELIMITER $$

CREATE FUNCTION alternateFavorite(id INT)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE favoriteInt INT;
    SELECT favorite FROM series WHERE series.id = id
    INTO favoriteInt;
    UPDATE series
    SET favorite = IF(favoriteInt = 0, 1, 0)
    WHERE series.id = id;
    RETURN favoriteInt;
END $$

DELIMITER ;
