// Select the database to use.
use('foo');

// clear collection
db.recipes.drop();

// insert 3 recipes with its ingredients
db.recipes.insertMany([
  // Recipe (1)
  {
    name: 'No-bake Cheesecake',
    description: 'No-Bake Cheesecake', 
    instructions: 'Mix all the ingredients and fill the crust with it, rest in the frigde for more than 12 hours up to 2 days.',
    ingredients: [
      {
        name: 'Graham crust',
        quantity: '1',
        measure: 'Unit'
      }, {
        name: 'Heavy cream',
        quantity: '1 and 1/4',
        measure: 'Cups'
      }, {
        name: 'Cream cheese',
        quantity: '24',
        measure: 'Ounces'
      }, {
        name: 'Sugar',
        quantity: '1/2',
        measure: 'Cups'        
      }, {
        name: 'Vanilla extract',
        quantity: '1',
        measure: 'Teaspoons'
      }
    ]
  },
  // Recipe (2) 
  { 
    name: 'Strawberry dessert',
    description: '3-step strawberry dessert',
    instructions: 'Cut puff pastry in half and bake at 400 degrees for 18 minutes, whip crème fraîche and sugar until fluffy. Assemble layers of puff pastry, whipped cream and strawberries.',
    ingredients: [
      {
        name: 'Puff pastry',
        quantity: '2',
        measure: 'Sheets'
      }, {
        name: 'Crème fraîche',
        quantity: '1',
        measure: 'Cups'
      }, {
        name: 'Sugar',
        quantity: '3',
        measure: 'Tablespoons'        
      }, {
        name: 'Strawberries',
        quantity: '4',
        measure: 'Ounces'        
      }
    ]
  },
  // Recipe (3) 
  { 
    name: 'Fried egg',
    description: 'Sunny side up fried egg',
    instructions: 'Heat the oil on a pan on medium heat, drop the egg on the oil and lower temperature, when they white of the egg is cook, remove and season with salt and pepper.',
    ingredients: [
      {
        name: 'Egg',
        quantity: '1',
        measure: 'Unit'
      }, {
        name: 'Vegetable oil',
        quantity: '3',
        measure: 'Tablespoons'
      }, {
        name: 'Salt',
        quantity: '1',
        measure: 'Pinch'        
      }, {
        name: 'Pepper',
        quantity: '1',
        measure: 'Pinch'        
      }
    ]
  }
]);

// List all the recipes
db.recipes.find();

// List of recipes that use ingredient: Sugar
db.recipes.find({
  'ingredients.name': 'Sugar'
});

// Update a recipe
// Update Recipe: 'Strawberry dessert' ingredient: 'Strawberries' from quantity 4 to 6
db.recipes.update({
  name: 'Strawberry dessert',
  'ingredients.name': 'Strawberries'
}, {
  $set: {
    'ingredients.$.quantity': '6'
  }
});

//confirm update
db.recipes.find({
  name: 'Strawberry dessert'
});
