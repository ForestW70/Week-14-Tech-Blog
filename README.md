# Forest Wilson - Homework 14 - Tech Blog
MIT - ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT) - For Good.
<!-- Original deployment date: July 16th, 2021 -->

## Table of Contents:
- [This week's concepts](#this-weeks-concepts)
- [Tech used](#tech-used)
- [Project description](#project-description)
- [Usage instructions](#usage-instructions)
- [Project installation](#project-installation)
- [Additional comments](#additional-comments)
- [Contribution information](#contribution-information)
- [Questions](#questions-or-concerns)
- [Pictures, Links](#extras)


### About This Project

* # This weeks concepts:
  1. MVC design pattern
  2. Handlebars
  3. Bcrypt
  4. Session cookies

* # Tech used: 
  1. Javascript
  2. CSS
  3. MySql
  4. Insomnia
  5. JawsDB heroku connection
  6. Npm
    * - handlebars
      - express
      - sequelize
      - bcrypt
      - nodemon

* # Project description:
  Given a desire to be more social, and to practice developing a site using the MVC paradigm, I built a full stack application dedicated to blogging about tech. Users may create accounts and manage posts, as well as view and comment on other people's posts. One last think, please don't tell Tik Tok about this site.... 

* # Usage instructions
  Create an account and start posting! The homepage will show you everyones posts sorted by most recent, and if you feel so inclined, you may leave comments on other user's posts as well. Use your user dashboard to see all of your posts, as well as delete the ones that you deem to cringy. When your done, be sure to log out, or if youre feeling lazy, just wait a while for your session to expire! 

* # Project installation
  * From repo:
    1. npm i 
    2. npm run mySql 
    3. npm run seed 
    4. npm start 
    5. Go crazy.
  
  * From site:
    1. Create an account / log in
    2. Enjoy.
     
* # Additional comments
(Jul/16/21)

  - tbh it was a little cruel to have this right before the project 2 MVC, but after much debugging and frustration, I finally was able to get this deployed in a condition that I am proud of. That being said there are multiple things I either didnt get a chance to fix, or just didnt have time to implement.

  - I wish I would have utilized some bootstrap into the views to have a cleaner mobile display, but it was only until the end of development that I realized this, and it didnt seem worth it to go back and change stuff. as a result, on mobile there are some size issues pertaining to the site header, as well as the nav-bar links. I made a few media query changes to make it a little less obvious, but clearly not perfect. next time, I'll be baking in the bootstrap from the beginning.

  - I would have liked to add a date formatting script so that the date-posted part of posts and comments didnt display as a full date with the time code and stuff, but I couldnt figure out where I could intercept that value and populate the new date. or store it as a string idk, for a future update.

  - I really liked what I did for the log-in page, where it transitions between the two tabs (log in and create an account), but for the life of me I couldnt figure out how to allign the tabs and the form perfectly ><

  - There is a bug that I've noticed where if you are on a specific screen and choose to log out, it will have you confirm, but then keep you the same page without changing anything. Expected performance will bring you through the confirm prompt, and then redirect you to the home screen where you can see that you are not logged in anymore. I may have fixed it with a patch, but I'm unsure if this was the solution. 


#### Contribution information 

- If you would like to contribute to this project, please follow best practices and message me at one of the provided contacts bellow if you want to push!

###### Questions or concerns? 
* Please contact me at one of the following!

  Email - Hexaforest@gmail.com
  gitHub - https://github.com/ForestW70/


# Extras

* Screenshots:
  ![Blog Homescreen](./assets/blog-home.png)
  ![User Dashboard](./assets/blog-dashboard.png)
  ![Create new post](./assets/blog-createpost.png)
  ![Post comments](./assets/blog-comments.png)
  ![Log in](./assets/blog-login.png)


* Links:
  [Repo page](https://github.com/ForestW70/Week-14-Tech-Blog)
  [Live site](https://techblog3456.herokuapp.com/home)
