# Sprint 3

Eli Dayney, elielieli1234, TrendStrength Fitness Tracker

### What I planned to do
-[Login page stylization](https://github.com/utk-cs340-fall23/TrendStrength-Fitness-Tracker/issues/51)
  - Re-implement the shake animation upon incorrect login
  - Fix the scaling on the background div that displays behind the input fields
- [Calendar front end stylization](https://github.com/utk-cs340-fall23/TrendStrength-Fitness-Tracker/issues/50) 
  - Make it so users can delete their workouts from the calendar
  - Fix the UI on the calendar page by adding padding to the calendar around the window edges
  - Add low opacity backgrounds to some of the cells on the calendar
  - Fix the constant display of the "rbc-currentim-time-indicator"
  
### What I did not do
- Re-implement the shake animation upon incorrect login
- Fix the scaling on the background div that displays behind the input fields
- Fix the constant display of the "rbc-currentim-time-indicator"
- Add low opacity backgrounds to some of the cells on the calendar

### What problems I encountered
- I was able to modify the color of the line by making a custom css file and labeling the parts of it as important, but clearly there is still conflicting css that is preventing me from making the time indicator display conditionally.
- I also implemented the shake animation, but I couldn't actually see if it worked because I didn't have Ty's server running to fetch login information from the database. As such, it just gives a popup indicating an error every time a user submits info.

### Issues I worked on
- [Calendar front end stylization](https://github.com/utk-cs340-fall23/TrendStrength-Fitness-Tracker/issues/50)
  - Make it so users can delete their workouts from the calendar
  - Fix the UI on the calendar page by adding padding to the calendar around the window edges
  - Fix the constant display of the "rbc-currentim-time-indicator"
- [Login page stylization](https://github.com/utk-cs340-fall23/TrendStrength-Fitness-Tracker/issues/51)
  - Re-implement the shake animation upon incorrect login (My failed attempts at doing so explain my modification of the .json files)

### Files I worked on
- workingDirectory\client\src\CalendarComponent.css
- workingDirectory\client\src\CalendarComponent.js
- workingDirectory\client\src\CalendarOverride.css
- workingDirectory\client\src\log.css
- workingDirectory\client\src\login.js
- workingDirectory\client\src\NewLogin.js

### What I accomplished
Basically, I started by trying to get the login page that I have been working on this whole time completely up and running. 
I was roadblocked though, because I hadn't coordinated with Ty to make sure the server was up and running so that information could be fetched from the database.
I unwittingly still spent time trying to get an animation to work upon incorrect login, though there was no way to detect whether or not a login was correct, as the code was already set up to fetch information from the database.
After that I simply added some code to stylize the create account butotn, since before it was pretty ugly. I then moved onto the calendar page.
All I did here was attempt to modify the appearance of the calendar, I initially wanted to add low opacity backgrounds to some of the outer cells, since their background was invisible and it was hard to see in front of the background image.
We decided that we'd probably remove the background image anyways though, so that was fine. Next I went on to making it so that users could delete their workouts from their workout page. I ended up having to add a particular id to each workout so that 
it could be found and removed from the calendar. This feature created a new problem where a user could layer workouts on top of each other, which I might turn into a feature, but for now it's just ugly. 
