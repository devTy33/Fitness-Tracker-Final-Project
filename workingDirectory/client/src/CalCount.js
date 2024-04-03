import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';

const gridItem = {
  // backgroundColor: "lightblue",
  // border: "1px solid rgba(0, 0, 0, 0.8)",
  padding: "20px",
}

const foodCalories = [
  // Fruits
  { name: 'Apple (1 medium)', calories: 95 },
  { name: 'Banana (1 medium)', calories: 105 },
  { name: 'Avocado (1 medium)', calories: 240 },
  { name: 'Blueberries (1 cup)', calories: 85 },

  // Vegetables
  { name: 'Broccoli (1 cup, chopped)', calories: 55 },
  { name: 'Spinach (1 cup, raw)', calories: 7 },
  { name: 'Sweet potato (1 medium, baked)', calories: 100 },

  // Proteins
  { name: 'Chicken breast (3 oz, cooked)', calories: 165 },
  { name: 'Salmon (3 oz, cooked)', calories: 155 },
  { name: 'Ground beef (3 oz, cooked)', calories: 250 },
  { name: 'Tofu (3 oz)', calories: 70 },
  { name: 'Ground turkey (3 oz, cooked)', calories: 160 },

  // Grains
  { name: 'White rice (1 cup, cooked)', calories: 205 },
  { name: 'Brown rice (1 cup, cooked)', calories: 215 },
  { name: 'Whole wheat bread (1 slice)', calories: 70 },
  { name: 'Pasta (1 cup, cooked)', calories: 200 },
  { name: 'Oatmeal (1 cup, cooked)', calories: 150 },
  { name: 'Quinoa (1 cup, cooked)', calories: 220 },

  // Dairy
  { name: 'Greek yogurt (1 cup)', calories: 130 },
  { name: 'Cheddar cheese (1 oz)', calories: 110 },
  { name: 'Milk (1 cup, whole)', calories: 150 },

  // Other Foods
  { name: 'Almonds (1 oz)', calories: 160 },
  { name: 'Lentils (1 cup, cooked)', calories: 230 },
  { name: 'Banana smoothie (8 oz)', calories: 160 },
  { name: 'Peanut butter (2 tbsp)', calories: 190 },
  { name: 'Honey (1 tbsp)', calories: 64 },
];

function App() {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState({ feet: '', inches: '' });
  const [weightInLbs, setWeightInLbs] = useState('');
  const [goal, setGoal] = useState('maintain');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [calories, setCalories] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'height') {
      setHeight((prevHeight) => ({ ...prevHeight, [event.target.dataset.unit]: value }));
    } else {
      switch (name) {
        case 'gender':
          setGender(value);
          break;
        case 'age':
          setAge(value);
          break;
        case 'weight':
          setWeightInLbs(value);
          break;
        case 'goal':
          setGoal(value);
          break;
        case 'activityLevel':
          setActivityLevel(value);
          break;
        default:
          break;
      }
    }
  };

  const calculateCalories = () => {
    const feet = parseFloat(height.feet) || 0;
    const inches = parseFloat(height.inches) || 0;
    const heightInCm = feet * 30.48 + inches * 2.54;

    const weightInKgs = parseFloat(weightInLbs / 2);

    let calorieNeeds = 0;

    if (gender === 'male') {
      calorieNeeds =
        88.5 +
        16.99 * (weightInKgs) +
        8.003 * heightInCm -
        7.67 * parseFloat(age);
    } else if (gender === 'female') {
      calorieNeeds =
        447.1 +
        12.247 * (weightInKgs) +
        4.598 * heightInCm -
        5.389 * parseFloat(age);
    }

    console.log({goal, activityLevel})

    if (goal === 'increase') {
      calorieNeeds += 500;
    } else if (goal === 'decrease') {
      calorieNeeds -= 500;
    }

    // Adjust calorie needs based on activity level
    if (activityLevel === 'sedentary') {
      calorieNeeds *= 1.25;
    } else if (activityLevel === 'moderate') {
      calorieNeeds *= 1.55;
    } else if (activityLevel === 'active') {
      calorieNeeds *= 1.9;
    }

    setCalories(calorieNeeds);
  };

  return (
     
    <div style={{ justifySelf: 'center', alignSelf: 'center', display: 'flex', flexDirection: 'column', top: '50%', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Calorie Counter</h1>
        <p>
          This tool will help you on your journey to a healthier lifestyle 
          by providing a seamless and intuitive way to track your daily caloric intake. 
          Whether you're striving for weight loss, muscle gain, or simply maintaining a balanced diet, 
          our calorie counter is designed to be your trusted ally.
        </p>
      </div>
      
      <div style={{ display: 'grid', borderRadius: "5px", border: "1px solid red", backgroundColor: 'grey', gridTemplateColumns: "auto auto", padding: "10px" }}>
        
        <div style={gridItem}><label>Gender</label></div>
        <div style={gridItem}>
          <input type="radio" id="huey" name="gender" value="male" checked={gender === 'male'} onChange={handleInputChange} />
          <label htmlFor="huey">male</label>
          <input type="radio" id="dewey" name="gender" value="female" checked={gender === 'female'} onChange={handleInputChange} />
          <label htmlFor="dewey">female</label>
        </div>

        <div style={gridItem}><label>Age</label></div>
        <div style={gridItem}>
          <input
            type="number"
            name="age"
            onChange={handleInputChange}
          />
        </div>

        <div style={gridItem}><label>Height</label></div>
        <div style={{ ...gridItem, display: 'flex' }}>
          <div style={{ padding: "10px" }}>
            <input
              type="number"
              name="height"
              data-unit="feet"
              onChange={handleInputChange}
              placeholder="Feet"
            />
          </div>
          <div style={{ padding: "10px" }}>
            <input
              type="number"
              name="height"
              data-unit="inches"
              onChange={handleInputChange}
              placeholder="Inches"
            />
          </div>
        </div>

        <div style={gridItem}><label>Weight (lbs)</label></div>
        <div style={gridItem}>
          <input
            type="number"
            name="weight"
            onC1hange={handleInputChange}
          />
        </div>

        <div style={gridItem}><label>Goal</label></div>
        <div style={gridItem}>
          <select value={goal} name="goal" onChange={handleInputChange}>
            <option value="maintain">Maintain Weight</option>
            <option value="increase">Increase Weight</option>
            <option value="decrease">Decrease Weight</option>
          </select>
        </div>

        <div style={gridItem}><label>Activity Level</label></div>
        <div style={gridItem}>
          <select value={activityLevel} name="activityLevel" onChange={handleInputChange}>
            <option  value="sedentary">Sedentary</option>
            <option  value="moderate">Moderate</option>
            <option  value="active">Active</option>
          </select>
        </div>

        <div style={gridItem}></div>
        <div style={gridItem}>
          <button onClick={calculateCalories}>Calculate Calories</button>
        </div>

        <div style={gridItem}></div>
        <div style={gridItem}>
          <div>
            <h2>Daily Calorie Needs:</h2>
            {calories !== null && <p>{calories} calories per day</p>}
          </div>
        </div>
      </div>
      {/* Integrating FoodCaloriesList component */}
      <div style={{ gridColumn: 'span 2' }}>
          <div style={{ border: "1px white", padding: "10px", marginTop: "20px" }}>
            <h2>Common Foods and Calorie Counts:</h2>
            <ul>
              {foodCalories.map((food, index) => (
                <li key={index}>
                  {food.name}: {food.calories} calories
                </li>
              ))}
            </ul>
          </div>
        </div>
    </div>
  );
}

export default App;
