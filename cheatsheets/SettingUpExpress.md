Commands to set up express:

```
    mkdir express-app-name/ # or clone your repo instead if it alredy exists

    cd express-app-name

    # create your npm package.json, use defaults
    npm init --yes

    # adds express dependency to package, downloads to your computer
    npm install express

    # create express entry point file,
    # server.js is just a naming convention
    touch server.js

    # run your server
    nodemon server.js # or node server.js
```

Example server.js

```
const express = require('express');
const port = 3000

// Import routes file, this is where
// the API logic will go
const routes = require('./routes.js');

// the routes module will serve
// the API from /my-routes
app.use('/my-routes', routes);

// Allows you to use path params, body, and
// query string parameters
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

```

Example routes.js

```
const express = require('express');
const routes = express.Router();

// logic for our endpoints
const routesList = [];

routes.get("/", (req, res) => {
    // this is the logic to return a list of items
    // you may have code in here that accept query strings
    let returnedRoutes = routesList; // setting it to the full list

    // adding a query to get a subset of your
    // data
    if ( req.query.name ) {
        returnRoutes = routesList.filter( (route) => {
             return route.name === req.query.name
        })
    }

     res.json(returnedRoutes);
});

routes.get("/:routeId", (req, res) => {
    // this is the logic to a single item by id
    // whatever you have after the : is set to the params variable
    // for example:
    const id = req.params.routeId;

    // use this id as a way of finding your
    // item
    const item = routesList.find( (route) => {
        return route.id === id;
    })

    res.json(item);
});

// accept POST request at URI: /routes
routes.post("/", (req, res) => {
    // Get item from body
    const newRoute = req.body;
    // Add to array
    routes.push(newRoute);

    res.status(201); // return 201 status code
    res.json(routesList) // return changed list
});

// accept PUT request at URI: /routes
routes.put("/:routeId", (req, res) => {
    const id = req.params.routeId;

    // use this id as a way of finding your
    // item
    const index = routesList.findIndex( (route) => {
        return route.id === id;
    })

    // Get item from body
    const newRoute = req.body;

    // Add to array
    //removes 1 item from the array, starting at the index provided,
    // then adds newStudent in its place
    // routes.splice(index, 1, newRoute);

  res.json(newRoute);
});

// accept DELETE request at URI: /routes
routes.delete("/:id", (req, res) => {
    // use this id as a way of finding your
    // item
    const index = routesList.findIndex( (route) => {
        return route.id === id;
    })

    // routes.splice(index, 1);
    res.status(204)
    res.json("Deleted");
});

// export module so it's usable in other files
module.exports = routes;
```
