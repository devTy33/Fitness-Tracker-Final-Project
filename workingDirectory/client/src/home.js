import React from 'react';
import './Styles.css';

function Home() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/CalendarComponent">Calendar</a></li>
            <li><a href="/MealPlanner">Nutrition</a></li>
            <li><a href="split">Planner</a></li>
            <li><a href="/login">Login/Create Account</a></li>
            <li><a href="/gallery">Workouts</a></li>
            <li><a href="/CalorieCalculator">Calorie Calculator</a></li>
            <li><a href="/runAnalyzer">Run Analyzer</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h1>TrendStrength Fitness Tracker</h1>
          <p>Never Stop Progressing</p>
        </div>
      </section>
      <section className="featured-classes">
        <h2>Features</h2>
        <div className="class">
          <img src="/Calendar.jpg" alt="Calendar" />
          <h3>Calendar</h3>
          <p>Track your progress on a daily basis.</p>
        </div>
        <div className="class">
          <img src="/Nutrition.jpg" alt="Nutrition Calculator" />
          <h3>Nutrition Calculator</h3>
          <p>Determine your maintenance calories to meet your goals.</p>
        </div>
        <div className="class">
          <img src="/Planner.jpg" alt="Workout Planner" />
          <h3>Workout Planner</h3>
          <p>Find an exercise routine that works for you.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;