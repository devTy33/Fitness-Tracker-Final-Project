# Sprint 1

Ty Anderson, devty33, TrendStrengthFitnessTracker

### What You Planned to Do 

1. Connect React (local host) to the Node server to be able to test and start building API:
https://github.com/utk-cs340-fall23/TrendStrength-Fitness-Tracker/issues/14

2. Set up Routes using react to be able to start working with multiple pages and set up API .get .post for specific routes
https://github.com/utk-cs340-fall23/TrendStrength-Fitness-Tracker/issues/15

3. Create basic user authentication to test api
https://github.com/utk-cs340-fall23/TrendStrength-Fitness-Tracker/issues/13

### What you did not do

I accomplished everything that I planned to do. I didn't plan to do anything with routes but I ended up doing so.

### What problems you encountered

1. Connecting the react frotend to the node server for simple communication and testing was difficult. There were just a lot of errors at first but I got it working.

2. Post api request after users hit the submit button on the login page kept on failing. I just had to learn more about calling api from react and fixed it.

### Issues you worked on

1. https://github.com/utk-cs340-fall23/TrendStrength-Fitness-Tracker/issues/14
2. https://github.com/utk-cs340-fall23/TrendStrength-Fitness-Tracker/issues/15
3. https://github.com/utk-cs340-fall23/TrendStrength-Fitness-Tracker/issues/13


### files you worked on 

- https://github.com/utk-cs340-fall23/TrendStrength-Fitness-Tracker/blob/main/front-end/src/login.js
- https://github.com/utk-cs340-fall23/TrendStrength-Fitness-Tracker/blob/main/server/index.js
- https://github.com/utk-cs340-fall23/TrendStrength-Fitness-Tracker/blob/main/front-end/src/App.js

### What you accomplished 

I got the front end and the back end to communicate. You can boot up the server and the npm start the react page and the react page can display data from the server. 

I set up the API to work for user authentication using express. When the user hits submit, react fethes the API with a post request and the username and password are made available on the node server.

I set up bare bones routes. I set up the route structure so that we can start integrating all of the pages together. Right now, when the user successfully makes an account, they are re-routed to the home page that riley made. 
