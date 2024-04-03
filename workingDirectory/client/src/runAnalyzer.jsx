// src/RunAnalyzer.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RunAnalyzer.css';

const RunAnalyzer = () => {
  const [runData, setRunData] = useState({
    // Sample run data, replace with your actual data
    distance: 0.0, // Assuming initial distance is in miles
    duration: 'HH:MM:SS',
    date: 'Year-Month-Day',
  });

  const [analysisResult, setAnalysisResult] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRunData({
      ...runData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Analyze pace (time per mile)
    const durationInSeconds = calculateDurationInSeconds(runData.duration);
    const pacePerMile = durationInSeconds / runData.distance;

    // Assuming a simple calorie calculation based on distance
    const caloriesBurned = calculateCaloriesBurned(runData.distance);

    setAnalysisResult({
      pace: formatPace(pacePerMile),
      caloriesBurned: caloriesBurned.toFixed(2),
    });
  };

  const calculateDurationInSeconds = (duration) => {
    const [hours, minutes, seconds] = duration.split(':');
    return parseInt(hours, 10) * 3600 + parseInt(minutes, 10) * 60 + parseInt(seconds, 10);
  };

  const calculateCaloriesBurned = (distance) => {
    // Replace this with your actual calorie calculation logic
    // This is just a simple example
    return distance * 100; // 100 calories per mile
  };

  const formatPace = (paceInSeconds) => {
    const minutes = Math.floor(paceInSeconds / 60);
    const seconds = paceInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds.toFixed(0)}`;
  };

  return (
    <div className="run-analyzer-container">
      <h1>Run Analyzer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={runData.date}
            onChange={handleInputChange}
            placeholder="Select date"
            required
          />
        </div>
        <div>
          <label>Distance (miles):</label>
          <input
            type="number"
            name="distance"
            value={runData.distance}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Duration:</label>
          <input
            type="text"
            name="duration"
            value={runData.duration}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {analysisResult && (
        <div>
          <h2>Analysis Results</h2>
          <p>Pace: {analysisResult.pace} per mile</p>
          <p>Calories Burned: {analysisResult.caloriesBurned} calories</p>
        </div>
      )}
      {/* Button to go back home */}
      <Link to="/home">
        <button>Go Back Home</button>
      </Link>
    </div>
  );
};

export default RunAnalyzer;

