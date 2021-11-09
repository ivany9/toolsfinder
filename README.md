## Final Project Tools Finder 

This Application is been  developing  as my final Project in the University of Sydney, to complete all the request to be a Web Developer. 


## User Stories

Sometimes when we are doing some works at home, fixing our car, triyng to repair the bicylce,hanging a picture in the wall, cleaneing the floor, working in the garden, etc, we dont have  tools to do  it, and to do this job just onces, we don't want to spend  money buying it, why?

Because we never again are going to use it, or we dont have enought room to keep it.

But, what about in our neighborhood, maybe someone have the correct tool that we are needing, and they have the tool in the garage that never used it,  also, they can get extra money rent it?

The Tools Finder app is the perfect app to connect our neighborhood, you can post your  tools and get money for it, and in the other side, someone can used whitout spending   money buying a tool that need it just one.


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

* The `/` route homepage route renders a list of all tools posted in the web, also the star reviews.

* The `/login` route renders a form to log in. 

* The `/Sing up` route renders a form to Sing Up.

* The  existing user can enter their credentials on the login page to create a session on the server.

* when a new user can create an account on the login page and then be immediately logged in with a session.

* The `/location/:id` route   renders all the  tool's  based on the route parameter id "post code".

* The `/category/:id` route  renders all the  tool's  based on the route parameter id category.

* The `/profile` route renders the logged-in user's toolsand the tools that you have rent and a form to create a new tool.
 
* In the `/profile` you can update and delete yours tools

* Only a logged in user can visit the `/profile` route.

* The user  logged  is redirected to `/profile` when they try to visit `/login` again.

* The user on the profile page can use the form to create a new tool and  1 photo in .

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



# License 
![License](https://img.shields.io/badge/License-MIT-blue.svg "License Badge")  



## Contact-Information:

    -GitHub Username: ivany9
    -ivany9@gmail.com



