import React from 'react';

function App() {
  const workoutPlan = {
    push: [
      { exercise: 'Bench Press', image: 'bench-press.jpg' },
      { exercise: 'Overhead Press', image: 'overhead-tricep.jpg' },
      { exercise: 'Dips', image: 'chest-dips.jpg' },
      { exercise: 'Shoulder Press', image: 'press.jpg' },
      { exercise: 'Lateral Raise', image: 'lat.jpg' },
      { exercise: 'Cable Fly', image: 'cable-flyes.jpg' },
    ],
    pull: [
      { exercise: 'Pull-Ups', image: 'pull-ups.jpg' },
      { exercise: 'Bent Over Rows', image: 'bent-over.jpg' },
      { exercise: 'Face Pulls', image: 'face.jpg' },
      { exercise: 'Hammer Curl', image: 'hammer-curls.jpg' },
      { exercise: 'Bicep Curl', image: 'bicep-curl.jpg' },
    ],
    legs: [
      { exercise: 'Squats', image: 'squat.jpg' },
      { exercise: 'Leg Extension', image: 'le.jpg' },
      { exercise: 'Hamstring Curl', image: 'hs.jpg' },
      { exercise: 'Calf Raise', image: 'cr.jpg' },
    ],
    fullBody: [
      { exercise: 'Bench Press', image: 'bench-press.jpg' },
      { exercise: 'Dips', image: 'chest-dips.jpg' },
      { exercise: 'Pull-Ups', image: 'pull-ups.jpg' },
      { exercise: 'Bent Over Rows', image: 'bent-over.jpg' },
      { exercise: 'Lateral Raise', image: 'lat.jpg' },
      { exercise: 'Bicep Curl', image: 'bicep-curl.jpg' },
      { exercise: 'Squats', image: 'squat.jpg' },
    ],
  };

  const styles = {
    App: {
      textAlign: 'center',
      margin: '50px auto',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    h1: {
      fontSize: '2.5em',
      color: '#333',
    },
    h2: {
      fontSize: '2em',
      color: '#444',
      marginTop: '20px',
    },
    workoutPlan: {
      marginTop: '20px',
    },
    ul: {
      listStyleType: 'none',
      padding: 0,
    },
    li: {
      fontSize: '1.5em',
      color: '#666',
      margin: '10px 0',
      backgroundColor: '#f9f9f9',
      padding: '10px',
      borderRadius: '4px',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
    },
    liHover: {
      backgroundColor: '#e9e9e9',
    },
    workoutCategory: {
      marginTop: '40px',
    },
    img: {
      maxWidth: '600px',
      height: 'auto',
      borderRadius: '4px',
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.App}>
      <h1 style={styles.h1}>Workout Split</h1>
      <div style={styles.workoutPlan}>
        <WorkoutCategory name="Push Day" exercises={workoutPlan.push} styles={styles} />
        <WorkoutCategory name="Pull Day" exercises={workoutPlan.pull} styles={styles} />
        <WorkoutCategory name="Leg Day" exercises={workoutPlan.legs} styles={styles} />
        <WorkoutCategory name="Full Body" exercises={workoutPlan.fullBody} styles={styles} />
      </div>
    </div>
  );
}

const WorkoutCategory = ({ name, exercises, styles }) => (
  <div style={styles.workoutCategory}>
    <h2 style={styles.h2}>{name}</h2>
    <ul style={styles.ul}>
      {exercises.map((exercise, index) => (
        <li key={index} style={styles.li}>
          <img
            src={`${exercise.image}`}
            alt={exercise.exercise}
            style={styles.img}
          />
          <p>{exercise.exercise}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default App;