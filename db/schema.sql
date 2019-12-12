DROP DATABASE IF EXISTS holiday;

CREATE DATABASE holiday;

USE holiday;

CREATE TABLE users (
  user_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL DEFAULT "username",
  PASSWORD VARCHAR(200) NOT NULL DEFAULT "password",
  last_name VARCHAR(30) NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  email VARCHAR(100) NOT NULL,
  added TIMESTAMP NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id),
  UNIQUE (email)
);

CREATE TABLE recipes (
  recipe_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(175) NOT NULL,
  main_ingredient VARCHAR(40) NOT NULL,
  ingredients TEXT NOT NULL,
  directions TEXT NOT NULL,
  votes TINYINT NOT NULL DEFAULT 0,
  category
  SET
    (
      'entree',
      'side dish',
      'dessert'
    ),
    user_id INTEGER UNSIGNED NOT NULL,
    added TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY (recipe_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE
) ENGINE = InnoDB;

CREATE TABLE comments (
  comment_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  comment_text MEDIUMTEXT NOT NULL,
  added TIMESTAMP NOT NULL DEFAULT NOW(),
  user_id INTEGER UNSIGNED NOT NULL,
  recipe_id INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY (comment_id),
  FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE,
  FOREIGN KEY (recipe_id) REFERENCES recipes (recipe_id) ON DELETE CASCADE
) ENGINE = InnoDB;