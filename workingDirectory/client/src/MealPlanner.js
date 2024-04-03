import React from 'react';
import saladImage from './salad2.png'; 
import shrimppastaImage from './shrimppasta.png'; 
import waffle from './Waffle.png';
import quiche from './Quiche.png';
import stirfry from './Stir.png';
import omelet from './Omelet.png';
import chickenMA from './Chicken.png';

const MealPlanner = () => {
  const meals = [
    {
      name: 'Vegie and Chicken Quiche',
      image: quiche,
      ingredients: [
        '2 cups of flour',
        '3 tablespoons of butter',
        '3 eggs',
        '1 teaspoon salt',
        'chicken breast',
        '3/4 cup cream',
        '2 clove garlic',
        '1 red pepper',
        '1 green pepper',
        '1 onion',
        '1 zucchini',
        '1 medium carrot',
        '6 tablespoon parmesan cheese',
        '1/2 tablespoon olive oil',
      ],
      directions: `To prepare this dish, begin by sifting the flour and ensuring the butter is at room temperature. Set one egg aside for later use.

      Combine the flour, softened butter, and eggs in a bowl, stirring until a uniform dough forms. Shape the dough into a ball, wrap it in plastic, and refrigerate for 30 minutes.
      
      While the dough chills, clean and finely chop or process the vegetables, setting them aside.
      
      In a large pan, heat oil over medium heat. Add diced chicken breast and sauté until it changes color. Incorporate the cooked vegetables, season with salt and pepper, cover, and simmer for 20 minutes over low heat.
      
      Preheat the oven to 356°F (180°C). On a floured surface, roll out the dough with a rolling pin until it reaches approximately 9 inches (23 cm) in diameter.
      
      Transfer the rolled-out dough to a greased baking pan, and puncture it with a fork. Bake for 15 minutes or until golden brown. Remove from the oven and pour the chicken and vegetable filling over the crust, spreading it evenly.
      
      In a bowl, combine cream with the previously set aside egg, seasoning with salt and pepper. Pour this mixture over the filling, then sprinkle with cheese.
      
      Bake for an additional 10 to 15 minutes. Serve the dish hot.`,
      calorieCount: 499,
      fat: '30.1g',
      carbs: '39.1g',
      protein: '18.5g',
    },
    
    {
      name: 'Oat Waffles with Blueberries and Raspberries',
      image: waffle,
      ingredients: [
        'Oats: 5 tablespoons (50 g)',
        'Egg: 1 count (55 g)',
        'Milk: 1/3 cup (79 g)',
        'Baking Powder: 1 teaspoon (3 g)',
        'Stevia: 2 packets (2 g)',
        'Vanilla Extract: 1 teaspoon (5 g)',
        'Blueberries: 1/2 cup (75 g)',
        'Raspberries: 1/2 cup (75 g)',
      ],
      directions: `Preheat the waffle maker while preparing the mix. If you don't have a waffle maker, a pancake pan works as well.

      If oat flour isn't available, blend rolled oats and all ingredients (except the fruit) until smooth.

      If using oat flour, combine all ingredients (excluding the fruit) in a bowl and let it sit for 5 minutes.

      Pour the mixture into the waffle maker and cook.

      To prevent sticking, you can oil the waffle maker.

      Serve the waffles and garnish with blueberries and raspberries. Optionally, add sugar-free syrup.

      Stevia can be replaced with your preferred sweetener, such as erythritol, sucralose, xylitol, monk fruit, etc.`,
      calorieCount: 402,
      fat: '10.4g',
      carbs: '59.5g',
      protein: '17.6g',
    },
    
    {
      name: 'Zucchini Omelet',
      image: omelet,
      ingredients: [
        'Zucchini: 1/2 count (100 g)',
        'Onion: 1/4 count (38 g)',
        'Egg: 2 count (110 g)',
        'Oil: 1/2 tablespoon (5 g)',
      ],
      directions: `Wash the zucchini and cut it into thin slices.

      In a bowl, place the eggs and season with salt and pepper.

      Place a pan over medium heat and add half of the oil.

      Add the onion previously cut into strips. Stir and cook for 10 minutes over low heat.

      Next, add the zucchini and season to taste. Stir from time to time and cook until the zucchini is softened.

      Add the vegetables to the eggs and mix.

      Place another pan over medium heat and add the remaining oil.

      Pour the mixture. Once it has set and browned on the bottom, flip and cook for another minute. Turn off.`,
      calorieCount: 234,
      fat: '15.8g',
      carbs: '7.4g',
      protein: '15.4g',
    },
    
    {
      name: 'Veggie & White Bean Salad',
      image: saladImage,
      ingredients: ['Greens', 'Veggies', 'Beans', 'Avocado', 'Vinegar', 'Oil', 'Salt', 'Pepper'],
      directions: 'In a medium bowl, mix together the greens, vegetables, beans, and avocado. Drizzle the mixture with vinegar and oil, then season with salt and pepper. Toss everything to combine well, and transfer the salad to a large plate.',
      calorieCount: 360,
      fat: '25g',
      carbs: '30g',
      protein: '10g',
    },
    
    {
      name: 'Chicken Stir-Fry with Bell Pepper and Cashews',
      image: stirfry,
      ingredients: [
        'Chicken Breast: 200 g',
        'Bell Pepper: 1 count (120 g)',
        'Cashews: 2 tablespoons (28 g)',
        'Oil: 1/2 tablespoon (5 g)',
        'Soy Sauce: 1 teaspoon (5 g)',
      ],
      directions: `Cut the bell pepper and chicken into small pieces.

      Heat a pan over high heat. Once heated, pour the oil, spread and add the chicken with a pinch of salt.

      Cook for 4 minutes over medium heat while stirring from time to time. Then add the bell pepper, soy sauce and mix well.

      Cover and cook for 5 more minutes.

      Season to taste and add the cashews. Mix well.

      Serve hot.`,
      calorieCount: 468,
      fat: '22.8g',
      carbs: '14.9g',
      protein: '51.7g',
    },
    
    {
      name: 'Shrimp Scampi with Noodles',
      image: shrimppastaImage,
      ingredients: [
        '2 tablespoons unsalted butter',
        '3 tablespoons extra-virgin olive oil, divided',
        '1 medium shallot, finely chopped (about 1/4 cup)',
        '2 medium garlic cloves, finely chopped',
        '2 tablespoons white wine',
        '2 tablespoons unsalted chicken stock',
        '1 pound large shrimp, peeled and deveined',
        '½ teaspoon black pepper',
        '⅞ teaspoon kosher salt, divided',
        '1 cup multicolored cherry tomatoes, halved',
        '6 cups spiralized zucchini (from 2 [10.7-oz.] pkgs.)',
        '4 tablespoons pregrated Parmesan cheese, divided',
        '2 tablespoons chopped fresh flat-leaf parsley'
      ],
      directions: `Heat butter and 1 tablespoon of oil in a large skillet over medium-high heat until the butter has melted, approximately 1 minute. Add the shallot and cook, stirring occasionally, until it softens, around 3 minutes. Stir in the garlic and cook constantly for 1 minute. Pour in the wine and stock, letting it simmer without disturbance until the liquid reduces by half, about 2 minutes. Add the shrimp, pepper, and 1/2 teaspoon of salt, and cook until the shrimp are just cooked through, approximately 3 minutes, turning them once halfway through the cooking time. Transfer the shrimp to a plate and set aside, keeping the shallot sauce in the skillet.

To the skillet, add tomatoes and the remaining 2 tablespoons of oil. Cook over medium-high heat without stirring until the tomatoes begin to soften, about 1 minute. Add the zucchini and the remaining 3/8 teaspoon of salt, tossing to combine. Return the shrimp to the skillet and cook, stirring constantly, until the mixture is heated through, about 1 minute. Remove the skillet from the heat, add 2 tablespoons of Parmesan, and toss to combine everything.

Divide the mixture evenly among 4 bowls, then sprinkle with parsley and the remaining 2 tablespoons of Parmesan. Serve immediately.`,
      calorieCount: 349,
      fat: '27g',
      carbs: '6g',
      protein: '19g',
    },
    
    {
      name: 'Chicken with Marinated Mushrooms and Avocado',
      image: chickenMA,
      ingredients: [
        'Chicken Breast: 200 g',
        'Mushrooms: 1 cup (70 g)',
        'Avocado: 1/2 count (120 g)',
        'Garlic Paste: 1/2 teaspoon (1 g)',
        'Soy Sauce: 1 tablespoon (14 g)',
        'Mustard: 1 teaspoon (5 g)',
        'Oil: 1/2 tablespoon (5 g)',
      ],
      directions: `Mix soy sauce, garlic paste or powder, mustard, some water, and a pinch of pepper.

      Marinate the chicken with half of the mixture and marinate the mushrooms with the remaining.

      Preheat a pan over high heat. Once heated, pour oil and then add the chicken breast.

      Cook each side for 4-6 minutes.

      Once flipped, add the mushrooms with the remaining marinade.

      Cover and cook together until well cooked. Remove.

      Peel the avocado, cut into pieces, and add salt and pepper to taste.

      Serve the marinated chicken and mushrooms with avocado.`,
      calorieCount: 504,
      fat: '28.2g',
      carbs: '13.9g',
      protein: '51.3g',
    },
    
    // Add more meals as needed
  ];

  return (
    <div className="meal-planner-container">
      <h1>TrendStrength Nutrition and Meal Prep</h1>
      
      {/* Breakfast Section */}
      <h2>Breakfast</h2>
<div className="meal-list">
  {meals.filter(meal => meal.name === 'Vegie and Chicken Quiche' || meal.name === 'Oat Waffles with Blueberries and Raspberries' || meal.name === 'Zucchini Omelet').map((meal, index) => (
    <div className="meal-item" key={index}>
      <h3>{meal.name}</h3>
      <img src={meal.image} alt={meal.name} />
      <h4>Ingredients:</h4>
      <ul>
        {meal.ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}
      </ul>
      <h4>Directions:</h4>
      <p>{meal.directions}</p>
      <p><strong>Calorie Count:</strong> {meal.calorieCount} calories</p>
      <p><strong>Fat:</strong> {meal.fat}</p>
      <p><strong>Carbs:</strong> {meal.carbs}</p>
      <p><strong>Protein:</strong> {meal.protein}</p>
    </div>
  ))}
</div>

      {/* Lunch Section */}
      <h2>Lunch</h2>
      <div className="meal-list">
        {meals.filter(meal => meal.name === 'Veggie & White Bean Salad' || meal.name === 'Chicken Stir-Fry with Bell Pepper and Cashews').map((meal, index) => (
          <div className="meal-item" key={index}>
            <h3>{meal.name}</h3>
            <img src={meal.image} alt={meal.name} />
            <h4>Ingredients:</h4>
            <ul>
              {meal.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
            <h4>Directions:</h4>
            <p>{meal.directions}</p>
            <p><strong>Calorie Count:</strong> {meal.calorieCount} calories</p>
            <p><strong>Fat:</strong> {meal.fat}</p>
            <p><strong>Carbs:</strong> {meal.carbs}</p>
            <p><strong>Protein:</strong> {meal.protein}</p>
          </div>
        ))}
      </div>

      {/* Dinner Section */}
      <h2>Dinner</h2>
      <div className="meal-list">
        {meals.filter(meal => meal.name === 'Shrimp Scampi with Noodles' || meal.name === 'Chicken with Marinated Mushrooms and Avocado').map((meal, index) => (
          <div className="meal-item" key={index}>
            <h3>{meal.name}</h3>
            <img src={meal.image} alt={meal.name} />
            <h4>Ingredients:</h4>
            <ul>
              {meal.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
            <h4>Directions:</h4>
            <p>{meal.directions}</p>
            <p><strong>Calorie Count:</strong> {meal.calorieCount} calories</p>
            <p><strong>Fat:</strong> {meal.fat}</p>
            <p><strong>Carbs:</strong> {meal.carbs}</p>
            <p><strong>Protein:</strong> {meal.protein}</p>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="meal-planner-summary">
        <h2>Why Meal Planning, Calorie Surplus, and Calorie Deficit are Important:</h2>
        <p> Meal planning ensures a balanced and nutritious diet, supports weight management goals, and provides consistent energy. Calorie surplus aids in muscle gain and strength, while calorie deficit promotes weight and fat loss, leading to better overall health and fitness. It's important to consult with a healthcare provider or a nutritionist to determine the right calorie balance for your individual needs and goals.</p>
      </div>
    </div>
  );
};

export default MealPlanner;