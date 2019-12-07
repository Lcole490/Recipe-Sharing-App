

// Get references to page elements
var $recipeAuthor = $("#recipe-author");
var $recipeName = $("#recipe-name");
var $recipeMainIngredient = $("#recipe-main");
var $recipeOtherIngredients = $("#recipe-other");
var $recipeDirections = $("#recipe-directions");
var $recipeCategory = $("#recipe-category");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  submitRecipe: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/recipes",
      data: JSON.stringify(example)
    });
  },
  getRecipes: function() {
    return $.ajax({
      url: "api/recipes",
      type: "GET"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshRecipes = function() {
  API.getRecipes().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    author: $recipeAuthor.val().trim(),
    recipe: $recipeName.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.submitRecipe(example).then(function() {
    refreshExamples();
  });

  $recipeAuthor.val("");
  $recipeName.val("");
};

// Add event listeners to the submit button
$submitBtn.on("click", handleFormSubmit);


