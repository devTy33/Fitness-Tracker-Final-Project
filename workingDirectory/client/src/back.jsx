import React from 'react';

const backExStyles = {
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

function BackEx() {
  const backExercises = [
    { name: 'Pull-Ups', image: 'pull-ups.jpg' },
    { name: 'Lat Pulldowns', image: 'lat-pulldown.jpg' },
    { name: 'Bent Over Rows', image: 'bent-over.jpg' },
    { name: 'Cable Rows', image: 'cable-row.jpg' },
    { name: 'Deadlifts', image: 'deadlifts.jpg' },
    { name: 'T-Bar Rows', image: 't-bar.jpg' },
  ];

  return (
    <div style={backExStyles.body}>
      <div style={backExStyles.app}>
        <header style={backExStyles.appHeader}>
          <h1 style={backExStyles.h1}>Back Exercises</h1>
        </header>
        <main style={backExStyles.appMain}>
          <ul style={backExStyles.ul}>
            {backExercises.map((exercise, index) => (
              <li key={index} style={backExStyles.li}>
                <img
                  src={`./${exercise.image}`}
                  alt={exercise.name}
                  style={backExStyles.exerciseImage}
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

export default BackEx;

