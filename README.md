# AwesomeCampSite
A web community for camping lovers to share information and communicate their experiences.
Developed the back-end with Node.js on Express and implemented the database system with MongoDB.

## Basic Introduction
Each Campground has:
   * Name
   * Price  
   * Location (by Google API)
   * Image
   * Description


RESTFUL ROUTES

|name                | url                            |   verb     |     
|--------------------|--------------------------------|------------|
|INDEX  | /campgrounds                                 |   GET    |
|NEW    | /campgrounds/new                             |   GET    |
|CREATE | /campgrounds                                 |   POST   |
|SHOW   | /campgrounds/:id                             |   GET    |
|EDIT   | /campgrounds/:id/edit                        |   GET    |
|UPDATE | /campgrounds/:id                             |   PUT    |
|DELETE | /campgrounds/:id                             |   DELETE |
|=======|===========================================|==========|
|NEW    | /campgrounds/:id/comments/new                |   GET    |
|CREATE | /campgrounds/:id/comments                     |  POST   |
|EDIT   |  /campgrounds/:id/comments/:comment_id/edit   |   GET   |
|UPDATE | /campgrounds/:id/comments/:comment_id/       |   PUT    |
|DELETE | /campgrounds/:id/comments/:comment_id/       |   DELETE |


## Initial Setup
* Add Landing Page
* Add Campgrounds Page that lists all campgrounds


## Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

## Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

## Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

## Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

## Add Mongoose
* Install and configure Mongoose
* Setup campground model
* Use campground model inside of our routes

## Show Page
* Add description to the campground model
* Add a show route/template

## Refactor Mongoose Code
* Create a models directory
* Use module.exports

## Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

## Add the Comment model!
* Make errors go away!
* Display comments on campground show page

## Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

## Style Show Page
* Add sidebar to show page
* Display comments nicely

## Finish Styling Show Page
* Add public directory
* Add custom stylesheet

## Auth Pt. 1 - Add User Model
* Install all packages needed for auth
* Define User model 

## Auth Pt. 2 - Register
* Configure Passport
* Add register routes
* Add register template

## Auth Pt. 3 - Login
* Add login routes
* Add login template

## Auth Pt. 4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar

## Auth Pt. 5 - Show/Hide Links
* Show/hide auth links in navbar 

## Refactor The Routes
* Use Express router to reoragnize all routes

## Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

## Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username+id to newly created campground

 

