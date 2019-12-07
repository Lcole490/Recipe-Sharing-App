USE holiday;

INSERT INTO
    users (last_name, first_name, email)
VALUES
    ('Bodnar', 'Jonathan', 'jon@fake-email.com'),
    ('Oliver', 'Kaiisha', 'kaiisha@fake-email.com'),
    ('Cole', 'Lavar', 'lavar@fake-email.com'),
    ('Kolli', 'Aruna', 'aruna@fake-email.com'),
    ("Upshaw", "Nick", "nick@fake-email.com");

INSERT INTO
    recipes (
        title,
        main_ingredient,
        ingredients,
        directions,
        category,
        user_id
    )
VALUES
    (
        'Frozen Chocolate Spaghetti Peppermint Balls',
        'tomato sauce',
        'tomato sauce, noodles, magic shell, pepermint sticks, rosemary',
        'make the spaghetti. freeze the spaghetti. once frozen, pour magic shell over frozen spaghetti and stick peppermint sticks in it. springle rosemary over the spaghetti. serve with garlic bread and red wine',
        'entree',
        1
    ),
    (
        'Classic Stuffed Mushrooms',
        "mushrooms",
        'walnuts, herbs, garlic, chopped mushroom stems, breadcrumbs, grated parmesan',
        'Separate the stems from the mushroom caps and chop them. Process with herbs and breadcrumbs and stuff the mushroom caps with the mixture. Sprinkle with parmesan and bake until the cheese starts to brown and the mushroom caps release some of their water.',
        'side dish',
        3
    );

INSERT INTO
    comments (comment_text, user_id, recipe_id)
VALUES
    (
        "Good god almighty! Who the hell would eat this. Wait...Oh my! It's really good. No. It's freakin' awesome! A-W-E-S-O-M-E-!",
        3,
        1
    ),
    (
        'These mushrooms are delicious',
        1,
        2
    ),
    (
        "Yes. It's my recipe, but it's one of the best. Sometimes I can't even bring myself to eat it because I love it so much. I just put the giant frozen ball of chocolate covered spaghetti under my pillow and dream about eating it because it lasts all night that way.",
        1,
        1
    ),
    (
        "It's crap. Really. Don't eat it.",
        2,
        1
    ),
    (
        "You can keep the peppermint. I don't like peppermint.",
        4,
        1
    );