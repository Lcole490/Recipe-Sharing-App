/*
 Set up 3 tables:
 1. recipes, PK recipe_id, FK user_id
 2. users, PK user_id
 3. comments, PK comment_id, user_id
 
 User table can store something like email, first name, last name. We won't do authentication/but we might fake it or something
 Below I'm working on just getting something into the db. We will likely want to use sequelize to do all the setup later, for now
 I just want some data to test and make sense of what we might do with it on the ui end.
 */
DROP DATABASE IF EXISTS holiday;

CREATE DATABASE holiday;

USE holiday;

CREATE TABLE recipes (
  recipe_id MEDIUMINT NOT NULL AUTO_INCREMENT,
  title VARCHAR(175) NOT NULL,
  user_first VARCHAR(20) NOT NULL,
  user_last VARCHAR(40),
  ingredients TEXT NOT NULL,
  votes MEDIUMINT NOT NULL DEFAULT 0,
  season
  SET
    (
      'season01',
      'season02',
      'season03',
      'season04',
      'season05'
    ),
    instructions TEXT NOT NULL,
    added DATETIME DEFAULT NOW(),
    PRIMARY KEY (recipe_id)
);

INSERT INTO
  recipes (
    title,
    user_first,
    user_last,
    ingredients,
    season,
    instructions
  )
VALUES
  (
    "Test Recipe One",
    "user_first one",
    "user_last one",
    "turkey, ham, cranberries, carrots",
    'season03',
    'cook those things and then eat them'
  );

SELECT
  *
FROM
  recipes;