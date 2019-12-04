# Group7-Project2


### Holli-Share App (New Name TBD)


Purpose:

-   This app is a recipe sharing app that allows users to post and share recipes that encapsulate the holiday season. 
    The recipes are available for users to search by holiday, meal type, or creator of the recipe. 
    As such, when a user submits their recipe idea, they will be able to categorize it as above (holiday and meal type).





Initial Goals for App:

    * User should be able to give the title of the recipe they create
        Ex: "Jon's World Famous Spaghetti"
        Ex: "Aruna's Truffles"

    * User should be allowed to attach their name or remain anonymous (tagged to the recipe they create)
        Ex: "Cheddar-Stuffed Turkey" - Anonymous     
        Ex: "Flavortown Burger" - Guy Fieri

    * User's should be able to comment and rate a recipe
        > Rating system will be from 1-5. Will either be represented by "stars" or numerical percentage next to the Recipe Title
        > Other users can comment on a recipe in a text box

    * Users able to select from 1 of 4 categories to either test(search for recipe ideas) or impress (post or share their own recipe)
        > Entrees        > Side Dishes          > Desserts          > Drinks



### Initial Structure:

    * Site will feature 4 pages for user interaction
        - Home Page
        - Search Page
        - Recipe Submittal Page
        - Individual Recipe Page

    
    -->  Home Page: User is welcomed and Title of App is displayed. 
                    Below the main banner will be 4 categories from which user will select (Entree, Side, Dessert, Drink)
                    Under each they have option to search for a recipe or contribute their own recipe

    
    -->  Search Page: User is presented with a search field. Kind of search they can made is TBD (search by main item, ingredient, etc)
                      When the search is submitted, table is returned with recipes related to the search
                      Table can display name of dish, submitted by, rating, picture, short summary of dish

    -->  Recipe Submittal Page: Primarily a form is presented to the user. They will be able to select the category of the dish (Entree, Side, Dessert, Drink)
                                and also be able to type in the main ingredient (Chicken, Fish, Potatoes, etc). The form will have areas for the user to enter
                                the name of the dish in addition to including their own name as the author if they desire to. A textarea will be provided 
                                for listing secondary items, cooking time and directions

    -->  Individual Recipe Page: When user selects a recipe from the search page, they are then transferred to a separate page that is dedicated to that recipe.
                                 On this page, they can see the picture of the dish, more detailed directions, and comments left by other users


### Library:

We will be using Datatables as our library to house info from recipe in a table format on the search results page



### Future Scope:

*   User authentication/ login. 
    > Users will be able to have accounts where they can access recipes that they've contributed and recipes that they've used on their profile page.

    > Users can add other users as friends. If there's a certain user's recipes they like, they can subscribe to their "cookbook" and receive
      updates whenever they submit a new recipe.

    > Users able to update their recipes. This feature would require the user to confirm their password or only allow the original author of the 
      recipe to update the recipe.

    > ADVANCED: Incorporate algorithms or user history to recommend future recipes or users/cookbooks to subscribe to.

    


### More Information to Follow ....





