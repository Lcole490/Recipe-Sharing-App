DROP DATABASE IF EXISTS holiday;

CREATE DATABASE holiday;

USE holiday;

CREATE TABLE users (
  user_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  last_name VARCHAR(30) NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  email VARCHAR(100) NOT NULL,
  added TIMESTAMP NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id),
  UNIQUE (email)
) ENGINE = InnoDB;

CREATE TABLE recipes (
  recipe_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(175) NOT NULL,
  ingredients TEXT NOT NULL,
  directions TEXT NOT NULL,
  votes TINYINT NOT NULL DEFAULT 0,
  season
  SET
    (
      'fall',
      'winter',
      'spring',
      'summer'
    ),
    user_id INTEGER UNSIGNED NOT NULL,
    added TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY (recipe_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE,
    UNIQUE (title)
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
);

INSERT INTO
  users (last_name, first_name, email)
VALUES
  ('Bodnar', 'Jonathan', 'jon@fake-email.com'),
  ('Oliver', 'Kaiisha', 'kaiisha@fake-email.com'),
  ('Cole', 'Lavar', 'lavar@fake-email.com'),
  ('Kolli', 'Aruna', 'aruna@fake-email.com');

INSERT INTO
  recipes (title, ingredients, directions, season, user_id)
VALUES
  (
    'Frozen Chocolate Spaghetti Peppermint Balls',
    'tomato sauce, noodles, magic shell, pepermint sticks, rosemary',
    'make the spaghetti. freeze the spaghetti. once frozen, pour magic shell over frozen spaghetti and stick peppermint sticks in it. springle rosemary over the spaghetti. serve with garlic bread and red wine',
    'fall',
    1
  );

INSERT INTO
  comments (comment_text, user_id, recipe_id)
VALUES
  (
    "Good god almighty! Who the hell would eat this. Wait...Oh my! It's really good. No. It's freakin' awesome! A-W-E-S-O-M-E-!-!-!",
    3,
    1
  );

INSERT INTO
  comments (comment_text, user_id, recipe_id)
VALUES
  (
    "Yes. It's my recipe, but it's one of the best. Sometimes I can't even bring myself to eat it because I love it so much. I just put the giant frozen ball of chocolate covered spaghetti under my pillow and dream about eating it because it lasts all night that way.",
    1,
    1
  );

INSERT INTO
  comments (comment_text, user_id, recipe_id)
VALUES
  (
    "It's crap. Really. Don't eat it.",
    2,
    1
  );

INSERT INTO
  comments (comment_text, user_id, recipe_id)
VALUES
  (
    "You can keep the peppermint. I don't like peppermint.",
    4,
    1
  );

SELECT
  recipes.title,
  comments.comment_text,
  users.first_name,
  users.last_name,
  comments.added
FROM
  recipes
  INNER JOIN comments ON recipes.recipe_id = comments.recipe_id
  INNER JOIN users ON comments.user_id = users.user_id;