USE holiday;

INSERT INTO
<<<<<<< HEAD
    users
    (last_name, first_name, email)
=======
    users (username,password,last_name, first_name, email)
>>>>>>> master
VALUES
    ('JBodnar','password','Bodnar', 'Jonathan', 'jon@fake-email.com'),
    ('','','Oliver', 'Kaiisha', 'kaiisha@fake-email.com'),
    ('','','Cole', 'Lavar', 'lavar@fake-email.com'),
    ('','','Kolli', 'Aruna', 'aruna@fake-email.com'),
    ('','',"Upshaw", "Nick", "nick@fake-email.com");

INSERT INTO
    recipes
    (
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
    ),
    (
        'Oreo Truffles',
        "Oroes",
        'oreo cookies, cream cheese, chocolate',
        'To make 50 truffles:Crush a packet of Oreo cookies(family size) in a food processor. Add 8oz of cream cheese to the Oreo powder. Make bite size balls. Refrigerate the Oreo balls for 10 minutes. Heat chocolate in a microwave by checking every 30 seconds for needed consistency. Dip the Oreo balls in melted chocolate and set aside to dry on wax paper..',
        'dessert',
        4
    );



INSERT INTO
    comments
    (comment_text, user_id, recipe_id)
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