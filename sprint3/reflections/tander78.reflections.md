# Sprint 3

Ty Anderson, devTy33, TrendStrengthFitnessTracker

### What you planned to do
For this sprint I planned on making a duplicate login page for create account functionality, have the login page succesfully preform a post request to check if a user is in the data base, and have the create account page succesfully preform a post request to add a user to the data base.

Issue 44: https://github.com/utk-cs340-fall23/TrendStrength-Fitness-Tracker/issues/44
Issue 43: https://github.com/utk-cs340-fall23/TrendStrength-Fitness-Tracker/issues/43
Issue 42: https://github.com/utk-cs340-fall23/TrendStrength-Fitness-Tracker/issues/42

### What you did not do
I planned on building the routes and the schema for adding workouts from the calendar into the data base, but more focus was placed on improving the calendar UI first.

### What problems you encountered 
Setting up the data base with proper permisions proved to be challenging. The data base I created authenticated based on my IP adress which proved to be an issue durign the sprint presentation. I need to create a database that every team member has access to.

### Issues you worked on

[#1](https://github.com/utk-cs340-fall23/TrendStrength-Fitness-Tracker/issues/44)
[#2](https://github.com/utk-cs340-fall23/TrendStrength-Fitness-Tracker/issues/43)
[#3](https://github.com/utk-cs340-fall23/TrendStrength-Fitness-Tracker/issues/42)

### Files that you worked on
 - https://github.com/utk-cs340-fall23/TrendStrength-Fitness-Tracker/blob/main/workingDirectory/client/src/App.js

 - https://github.com/utk-cs340-fall23/TrendStrength-Fitness-Tracker/blob/main/workingDirectory/server/index.js
 - https://github.com/utk-cs340-fall23/TrendStrength-Fitness-Tracker/blob/main/workingDirectory/client/src/NewLogin.js

 - https://github.com/utk-cs340-fall23/TrendStrength-Fitness-Tracker/blob/main/workingDirectory/client/src/createAccount.js

### What you accomplished
I was able to connect to the data base and create post requests for both the login page and the create account page to access the data base. There is now full login and create account functionality. New users can make an account and the data will be stored in the data base. If old users try to make an account, it will direct them to the login page. If non existing users try to make an account it will direct them to the create account page. If the users types a wrong username or password they will be informed by the UI. I also created the page for users to make a new account and connected it through a button on the login page. 