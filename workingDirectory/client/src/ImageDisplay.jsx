import React from 'react';

function ImageDisplay() {
  const pageStyle = {
    //Formatting for the title of the page to be centered, size, and have a grey background
    backgroundColor: '#f0f0f0', // Grey color
    minHeight: '100vh', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const gridContainerStyle = {
    //Used to create a grid style for the muscle groups and the formatting for them
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '20px', 
    padding: '20px', 
    backgroundColor: 'white', 
    borderRadius: '8px', 
  };

  const imageStyle = {
    //Formatting for the pictures (width, height, curved corners)
    width: '100%', 
    height: 'auto',
    borderRadius: '8px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
  };

  const titleStyle = {
    //Formatting for the titles above the images 
    textAlign: 'center',
    fontSize: '2.0rem',
    margin: '10px 0',
  };

  //.js for the output of all of the images and titles. This is where the words
  //for the images are shown above the images and how the images are shown.
  //I have the "connection" between the gallery page and the exercise pages,
  //however, it is not working because it only shows the code of the page
  //instead of loading the file. 
  return (
    <div style={pageStyle}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>Fitness Gallery</h1>
      <div style={gridContainerStyle}>
        <div>
          <h2 style={titleStyle}>Legs</h2>
          <a href="/legs">
          <img src="/legs.jpg" alt="Legs" style={imageStyle} />
          </a>
        </div>
        <div>
          <h2 style={titleStyle}>Arms</h2>
          <a href="/arms">
          <img src="/arms.jpg" alt="Arms" style={imageStyle} />
          </a>
        </div>
        <div>
          <h2 style={titleStyle}>Chest</h2>
          <a href="/chest">
          <img src="/chest.jpg" alt="Chest" style={imageStyle} />
          </a>
        </div>
        <div>
          <h2 style={titleStyle}>Back</h2>
          <a href="/back">
          <img src="/back.jpg" alt="Back" style={imageStyle} />
          </a>
        </div>
        <div>
          <h2 style={titleStyle}>Abs</h2>
          <a href="./abs">
          <img src="/abs.jpg" alt="Abs" style={imageStyle} />
          </a>
        </div>
        <div>
          <h2 style={titleStyle}>Shoulders</h2>
          <a href="/shoulder">
          <img src="/shoulder.jpg" alt="Shoulders" style={imageStyle} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ImageDisplay;
