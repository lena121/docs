
## The core parts of Express

Express has just four major features: middleware, routing, subapplications, and conveniences.

## Middleware

Middleware is poorly named, but it’s a term that’s not Express-specific and has been
around for a while. The idea is pretty simple: rather than one monolithic request handler
function, you call several request handler functions that each deal with a small
chunk of the work. These smaller request handler functions are called middleware functions,
or middleware.
Middleware can handle tasks from logging requests to sending static files to setting
HTTP headers. The first middleware function you might use in an application is a logger—
it logs every request that comes into your server. When the logger has finished
logging, it will continue on to the next middleware in the chain. This next middleware
function might authenticate users. If they’re visiting a forbidden URL, it will respond
with a “not authorized” page. If they are allowed to visit it, they can continue to the
next function in the chain.

## Routing

Routing is better named than middleware. Like middleware, it breaks the one monolithic
request handler function into smaller pieces. Unlike middleware, these request
handlers are executed conditionally, depending on what URL and HTTP method a client
sends.
For example, you might build a web page with a homepage and a guestbook.
When the user sends an HTTP GET to the homepage URL, Express should send the
homepage. But when they visit the guestbook URL, it should send them the HTML for
the guestbook, not for the homepage! And if they post a comment in the guestbook
(with an HTTP POST to a particular URL), this should update the guestbook. Routing
allows you to partition your application’s behavior by route.
The behavior of these routes is, like middleware, defined

## Subapplications
Express applications can often be pretty small, even fitting in just one file. As your
applications get larger, though, you’ll want to break them up into multiple folders and
files. Express is unopinionated about how you scale your app, but it provides one
important feature that’s super helpful: subapplications. In Express lingo, these miniapplications
are called routers.
Express allows you to define routers that can be used in larger applications. Writing
these subapplications is almost exactly like writing normal-sized ones, but it allows
you to further compartmentalize your app into smaller pieces.
This feature doesn’t really shine until your applications get large, but when they do,
it’s extraordinarily helpful.




## Middleware
Middleware — In contrast to vanilla Node.js, where your requests flow
through only one function, Express has a middleware stack, which is effectively
an array of functions.

## Routing
Routing — Routing is a lot like middleware, but the functions are called
only when you visit a specific URL with a specific HTTP method. You could
run a request handler only when the browser visits yourwebsite.com/
about, for example.

## Extensions to request and response objects
Express extends the request and response
objects with extra methods and properties for developer convenience.

## Views
Views — Views allow you to dynamically render HTML. This both allows you to
change the HTML on the fly and to write the HTML in other languages.


## Middleware and the middleware stack

web servers listen for requests, parse those requests, and send
responses. The Node runtime will get these requests first and turn them from raw
bytes into two JavaScript objects that you can handle: one object for the request (req )
and one object for the response (res).

These two objects will be sent to a JavaScript function that you’ll write. You’ll parse req
to see what the user wants and manipulate res to prepare your response.

In Node, these two objects are passed through just one function. But in Express,
these objects are passed through an array of functions, called the middleware stack.
Express will start at the first function in the stack and continue in order down the
stack.

Every function in this stack takes three arguments. The first two are req and res
from before. They’re given to you by Node, although Express decorates them with a
few convenience features.
The third argument to each of these functions is itself a function, conventionally
called next. When next is called, Express will go on to the next function in the stack.

Eventually, one of these functions in the stack must call res.end, which will end the
request. (In Express, you can also call some other methods like res.send or res.send-
File, but these call res.end internally.) You can call res.end in any of the functions
in the middleware stack, but you must only do it once or you’ll get an error.


### Packeges & Tools:

* npm install nodemon --global - restart automatically server if it will see any changes in any files, then in terminal should write such command: nodemon app.js instead of node start or node app.js.

### Node modules:

* __require("fs")__ - The Node.js file system module allow you to work with the file system on your computer.                                (https://www.tutorialspoint.com/nodejs/nodejs_file_system.htm)

* __require("path")__ - Node.js path module is used for handling and transforming file paths. (https://www.w3schools.com/nodejs/ref_path.asp)

### Express.js modules:

* __morgan__ - it is for automated logging of requests, responses and related data. When added as a middleware to an express/connect app, by default it should log statements to stdout showing details of: remote ip, request method, http version, response status, user agent etc.morgan is a function that returns a middleware function. When you call it, it will return a function like the one you wrote previously; it’ll take three arguments and call console.log. Most third-party middleware works this way — you call a function that returns the middleware, which you then use. You could have written the previous one like the following.

* __express.static__ - (http://evanhahn.com/express-dot-static-deep-dive/). It does several complicated tricks to achieve better security and performance, such as adding a caching mechanism. express.static is a function that returns a middleware function. It takes one argument: the path to the folder you’ll be using for static files. If the file exists at the path, it will send it. If not, it will call next and continue on to the next middleware in the stack. (http://expressjs.com/ru/starter/static-files.html)

* __body-parser__ - (https://github.com/expressjs/body-parser). Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

* __helmet__ - helps to secure your applications. 

### Error-handling middleware

There are two types of middleware. You’ve been dealing with the first type so far — regular middleware functions that take three arguments (sometimes two when next is discarded). 

There’s a second kind that’s much less-used: error-handling middleware. When your app is in error mode, all regular middleware is ignored and Express will execute only error-handling middleware functions. To enter error mode, simply call next with an argument. It’s convention to call it with an error object, as in next(new Error ("Something bad happened!")).

These middleware functions take four arguments instead of two or three. The first one is the error (the argument passed into next), and the remainder are the three from before: req, res, and next. You can do anything you want in this middleware. When you’re done, it’s just like other middleware: you can call res.end or next. Calling next with no arguments will exit error mode and move onto the next normal middleware; calling it with an argument will continue onto the next error-handling middleware if one exists.

While not enforced, error-handling middleware is conventionally placed at the end of
your middleware stack, after all the normal middleware has been added. This is because
you want to catch any errors that come cascading down from earlier in the stack.

## Routing
Routing is one of Express’s big features, allowing you to map different requests to different request handlers.
(http://expressjs.com/ru/guide/routing.html)

### Grabbing parameters to routes

* __Get params via string__ - the simplest way to grab a parameter is by putting it in your route with a colon in front of it.
```javascript
app.get("/users/:userid", function(req, res) {
var userId = parseInt(req.params.userid, 10);
// …
});
```

* __Using regular expressions to match routes__. Express allows you to specify your routes as strings and to specify them as regular expressions. This gives you more control over the routes you specify. You can also use regular expressions to match parameters. 
You might want, for example, to define a
route that looks for ranges; that is, if you visit /users/100-500, you can see a list of
users from IDs 100 to 500.
```javascript
app.get(/^\/users\/(\d+)-(\d+)$/, function(req, res) {
var startId = parseInt(req.params[0], 10);
var endId = parseInt(req.params[1], 10);
// …
});
```
* __Grabbing query arguments__. Another common way to dynamically pass information in URLs is to use query strings. You’ve probably seen query strings every time you’ve done a search on the internet. For example, if you searched for “javascript-themed burrito” on Google, you’d see a URL like this: https://www.google.com/search?q=javascript-themed%20burrito. There’s a common security bug with query parameters, unfortunately. If you visit ?arg=something, then req.query.arg will be a string. But if you go to ?arg=something&arg=somethingelse, then req.query.arg will be an array. We’ll discuss coping with these types of issues in detail in chapter 8. In general, you’ll want to make sure that you don’t blindly assume something is a string or an array.

