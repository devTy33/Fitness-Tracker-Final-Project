import React from 'react';

const appStyles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Ensure the content takes at least the full height of the viewport
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
  },
  h1: {
    fontSize: '2rem',
    margin: '0',
  },
  appMain: {
    padding: '4rem 0',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
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

function App() {
  const abExercises = [
    { name: 'Ab Crunch', image: 'ac.jpg' },
    { name: 'Ab Wheel Rollout', image: 'awr.jpg' },
    { name: 'Seated Crunch', image: 'sc.jpg' },
  ];

  return (
    <div style={appStyles.body}>
      <div style={appStyles.app}>
        <header style={appStyles.appHeader}>
          <h1 style={appStyles.h1}>Ab Exercises</h1>
        </header>
        <main style={appStyles.appMain}>
          <ul style={appStyles.ul}>
            {abExercises.map((exercise, index) => (
              <li key={index} style={appStyles.li}>
                <img
                  src={`./${exercise.image}`}
                  alt={exercise.name}
                  style={appStyles.exerciseImage}
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

export default App;
