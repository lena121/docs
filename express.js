### The core parts of Express

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

