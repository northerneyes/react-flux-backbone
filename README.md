react-flux-backbone
===================

React with the Flux architecture, combined with the power of Backbone's collections and models.
Goal of this project is to create a kind of bootstrap for a React application with the given tools, 
and as simple as possible without the need to learn a different framework-like layer above these libraries.


````
npm install
node  server.js
gulp
````
or:
````
npm install webpack -g
npm install
webpack -d -w
node  server.js
````



## Features
- Backbone's collections/models/events as data store, with ES6 classes.
- Usage of Backbone's router.
- Flux architecture.
- React views.
- React Mixin for easy-listing to the stores.
- Flickr async example with loading notifications.
- Dumb stores, complex actions. The actions should contain the business logic (XHR, validation(?)), 
the stores just for data.
- Example with webpack code-splitting based on the router.
- Minified size is about ~75Kb with Gzip, which includes jQuery (from CDN, ~30Kb), React (~35Kb), Backbone (~7Kb), 
Underscore.js (~5Kb) and the Flux dispatcher.
- App module directory structure, inspired by Django.

### Notes
Inspired by this article; http://www.toptal.com/front-end/simple-data-flow-in-react-applications-using-flux-and-backbone
