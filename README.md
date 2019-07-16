# News Glean
News Glean is an interactive React-powered application designed to filter news by keywords. We have harnessed the power of a dynamic technology framework, React. The application skyrockets into production with a Mongo database and an Express server. With help from ‘NewsApi.org’ our application renders a dynamic list of articles from a list of balanced journalistic sources. News Glean utilizes a user-friendly front end design that is modern, sleek and mobile friendly. You can even setup your very own account!

Carisa Sanez-Videtto, Ryan Grady, Isamar Valdivia, and Max Jackson

Here a walk through of our app
[Click Here](https://www.youtube.com/watch?v=GXJtbQW0JeI&feature=youtu.be)
# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
