## Final Project Tools Finder 

This Application has been developed for my final Project in the University of Sydney Boot Camp, and completes all the requirements to become a Web Developer. 


## User Stories

Sometimes we find ourselves wanting to do a job at home, fix our car, repair a bicycle, hang a picture on the wall, clean the floor, work in the garden, but we don't have  the tools to do it.  When we only need to do this job once, we don't want to spend a lot of money buying it.  Why?

It could be because we are never going to use it again, or maybe we dont have enought room to store it.

What if within our own neighborhood someone had the exact tool that we needed to compete the job.  What if someone had a garage full of tools that they never use? What if they  would like to make some extra money renting their tools?

The Tools Finder app is the perfect app to connect our neighborhood and help you get that job done.  You can post your tools and make money from renting them out.  On the other side you can rent someone elses tools to get your job done, all without spending money buying a new tool that they would only use once.


## Table of Contents

- [User Story](#User-Story)
- [Wirefrmaes](#Wireframes)
- [Deployed](#Deployed)
- [Models](#Models)
- [Technology](#technology)
- [Installation](#installation)
- [Usage](#Usage)
- [License](#license)
- [Questions](#Contact-Information)  


### Acceptance Criteria

* The `/` route homepage route renders a list of all tools posted in the web.

* The `/login` route renders a form to log in. 

* The `/Sing up` route renders a form to Sing Up.

* The  existing user can enter their credentials on the login page to create a session on the server.

* when a new user can create an account on the login page and then be immediately logged in with a session.

* The `/location/:id` route   renders all the  tool's  based on the route parameter id "post code".

* The `/category/:id` route  renders all the  tool's  based on the route parameter id category.

* The `/profile` route renders the logged-in user's toolsvand the tools that you have rent and a form to create a new tool.
 
* In the `/profile` you can update and delete yours tools

* Only a logged in user can visit the `/profile` route.

* The user  logged  is redirected to `/profile` when they try to visit `/login` again.

* The user on the profile page can use the form to create a new tool.

* The a user on the profile page can select a "Delete" button to remove their tool from the database.

* The logged-in user can select a "Logout" button to remove their session.

* The API routes to create and delete posts are protected from non logged-in users.

## Wireframes


<a href="https://github.com/ivany9/toolsfinder/files/7414012/toolsFinder.26oc.pdf" download="resume.pdf">Download</a>

## Deploy


<a href="https://toolsfinder.herokuapp.com">Deploy</a>


## Mockup

![mockup](https://user-images.githubusercontent.com/83906297/140872796-cbd205c3-e03d-49a9-a6e6-3ece6f4e4b0f.gif)

## Model 

## `User`

    * `username`

    * `email`

    * `password`

    * `postcode`

    *  `phone number`

    * `mytools`
    
    

  ## `Tool`

    * `name`

    * `category`

    * `description`

    * `date_created`

    * `image`

    * `status`

    * `return-date`

    * `day-price`

    * `hour-price`

    * `rent`
    
    * `createdby`




 # Technology

-React 
-Node.js
-Express.js
-Mongoose
-Mongodb
-Dotenv
-nodemon
-graphql


## Installation

>server>npm Install
>client>npm Install 


## Usage
 
 ```bash

>npm run develop
>http://localhost:3000 in the browser 
```


# License 
![License](https://img.shields.io/badge/License-MIT-blue.svg "License Badge")  



## Contact-Information:

    -GitHub Username: ivany9
    -ivany9@gmail.com



