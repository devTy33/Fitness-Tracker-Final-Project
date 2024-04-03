import React from 'react';

const chestExStyles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  app: {
    width: '100%',
    maxWidth: '1200px',
    textAlign: 'center',
  },
  appHeader: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem 0',
    position: 'auto',
    top: 0,
    width: '100%',
    zIndex: 100,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: '2rem',
    margin: 0,
    textAlign: 'center',
  },
  appMain: {
    padding: '4rem 0',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  },
  ul: {
    listStyle: 'none',
    padding: 0,
  },
  li: {
    backgroundColor: '#fff',
    border: '2px solid #ddd',
    borderRadius: '10px',
    padding: '1.5rem',
    maxWidth: '600px',
    textAlign: 'right',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.2s',
    flex: '0 0 calc(33.33% - 2rem)',
  },
  liHover: {
    transform: 'scale(1.05)',
  },
  exerciseImage: {
    width: '500px',
    height: '500px',
    objectFit: 'cover',
    margin: '0 auto 1rem',
  },
  exerciseName: {
    fontWeight: 'bold',
    marginTop: '1rem',
  },
};

function ChestEx() {
  const chestExercises = [
    { name: 'Bench Press', image: 'bench-press.jpg' },
    { name: 'Incline Bench Press', image: 'incline-bench-press.jpg' },
    { name: 'Push Up', image: 'push-up.jpg' },
    { name: 'Dumbbell Flyes', image: 'dumbbell-flyes.jpg' },
    { name: 'Chest Dips', image: 'chest-dips.jpg' },
    { name: 'Cable Flys', image: 'cable-flyes.jpg' },
  ];

  return (
    <div style={chestExStyles.body}>
      <div style={chestExStyles.app}>
        <header style={chestExStyles.appHeader}>
          <h1 style={chestExStyles.h1}>Chest Exercises</h1>
        </header>
        <main style={chestExStyles.appMain}>
          <ul style={chestExStyles.ul}>
            {chestExercises.map((exercise, index) => (
              <li key={index} style={chestExStyles.li}>
                <img
                  src={`./${exercise.image}`}
                  alt={exercise.name}
                  style={chestExStyles.exerciseImage}
                />
                {exercise.name}
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}

export default ChestEx;

