# Notes
[Readme](https://github.com/celesteac/Startup/blob/main/README.md#startup) <br />
[How to write in Markup](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#styling-text) <br />
My startup IP address http://23.23.184.165/

## Git notes
Use git fetch to see changes on github without downloading them <br />
Use git status to see if the local repo is up to date with github


## AWS notes
Use git bash or Mingw to ssh into the server. <br />
Use the command  ```ssh -i [key pair file] ubuntu@[ip address]``` <br />
Once in, use ```ls -l``` to see the files <br />
<br />
In order to create new domain names go to the Route 5 service and create new records <br />
*.yourwebsite.domainname will reroute anything (rand.happyrecipes.click) <br/>
"cname" dns type will map one dns class to a different one...? <br/>
"a" dns type is just and address <br/>
top level domain vs sub domain vs root domain <be/>
byu vs cs.260.byu.edu vs byu.edu
## HTTP/HTTPS
With Http, any message sent on the network is readable by everybody

## Vim notes
standard mode cannot write <br />
: command <br />
:w to save (write to disk) <br />
:q to quit <br />
:wq save and quit <br />
escape to get back to standard mode from anywhere else <br />
i for insert mode <br />
insert mode cannot save <br />

## Caddy Notes
Caddy does 3 important things
1. web certificates
2. serves up static HTML files
3. gateway for subdomain requests

## Ports
80 HTTP <br/>
443 https <br/>
20? ssh <br/>
## Console Notes
sudo is to use as a super user <br/>
ls is list <br/>
-la is long (all the details) <br/>
chmod modifies the permissions on the file <br/>
+x executable file <br/>

## Shell Script Notes
Write a shell script file.sh that can be run with specified commands from the command line. Very useful.

## HTML Notes
An HTML page is built to render just one page at a time and allow linking to other pages. When you load a new page, the whole state is dropped <br/>
Server side rendering vs client side rendering <br/>
Server side rendering is multiple files that the server takes, puts together, and sends off to display as one page. Client side rendering is when there is only one page, and javascript is used to dynamically change the content.

## CSS Notes
Defines rules sets composed of a _selector_ to select a group of elements and one or more _delaractions_ with _properties_ and _property values_
The box model: **todo insert picture**

### Three ways to do CSS:
inline: style tags work on **all** HTML elements<br />
style element: in the head of the file <br />
in a style sheet linked in the head: <link rel="stylesheet" href="styles.css"/> <br/>
_important:_ more specific styling is always taken over inherited styling <br/>
if specificity is equal, whichever is second takes precedence

### Ways to do responsive design
1. inside meta put name="viewport" property
2. inside a CSS rule for an object put float: inline-end or float: right
3. In a CSS display rule use block, inline, flex, or grid

**CSS Grid** formats the element's children into a grid format and has them re-arrange < br/>
**Debugging CSS** Use the Chrome debugger to turn styles on elements on and off and understand, don't just change the actual code until it looks ok

### fonts
This way or use @font-face
```
@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');
p {
  font-family: 'Rubik Microbe';
}
```

## JavaScript Notes
The primitive types are Null(a var w/out a value), Undefined(a var not defined), boolean, number, BigInt, String, Symbol(a unique value) <br/>
The object types are Object(like dict) function(can be called), Date, Array, Map(different from Object?), JSON(uses objects for info exchange) <br/>
In JS functions can be passed like first order or primitive type (like an int) <br/>
A JS object is like a map or dictionary (key-value pairs) <br/>
Arrays are not first-order objects??? <br />
Object equality is compared with memory addresses, not with actual content, so [1,2] != [1,2] <br/>
"undefined" is a primitive type, used often for things that have been declared or defined but not given a value (like some functions) <br/>
**const** is used to declare a variable that can't be changed, or more precisely what it is pointing to. If it were an object, you could still modify the object but not reassign the const variable <br/>
Equality is generally defined with truthy and falsy, or converted to a boolean and then evaluated. So, to show whether two variable are actually the same, use the strict equality === and inequality !== operators <br/>
ternary operator: a === 1 ? console.log(1) : console.log('not 1');
### Loops
**for** like c++ <br/>
**for in** for (const name in obj) - for object property names
when used on an array, prints indices, not values <br/>
**for of** for (const val of arr) - iterates over iterable's (map, array, set..) property values <br/>
**while** normal <br/>
**do while** do once then while <br/>
**switch** exist <br/>
**continue and break** can be put inside while loops 
### Anonymous Functions
variable = function() { ... } <br/>
a function with no name, kind of like a pointer to a function but actually a higher order function <br/>
useful to pass the anonymous function as a variable to some other function <br/>
the value of "variable" is the entire function definition <br/>
### Arrow Functions
A type of anonymous functios. Useful for passing functions without defining them with a name. The => takes the place of "function" <br/>
(a,b) => a-b <br/>
a single expression does not need {} or "return" <br/>
parentheses are not necessary if everything is on the same line and there is no return statement <br/>
**closures** are arrow functons designed to remember the values of the parameters when they are were created instead of the current variables <br?
 officially: A function that uses its surrounding state when it was created and those are the parameters it works with  <br/>
 
 ### JSON
 Uses Javascript Object Notation to transfer data. JSON.stringify(obj) converts to JSON and JSON.parse(josonobj) converts JSON to Javascript <br/>
 format: {"key":val} <br/>
 (cannot have a val of undefined) <br/>
 JSON objects always have strings for keys, JS objects always have symbols for keys (not strings) 
 ### Objects and Classes
 Any function that returns an object can be called with the new operator and is like a mini clas <br/>
 The entries, values, and keys functions return info about the object <br/>
 Classes are very similar but have slightly different syntax <br/>
 Classes can inherite from other classes using "extend"
 ### Useful
**RegEx** useful for finding text and replacing or matching it (among other things) <br/>
/regex/i <br/>
**Rest and Spread** for using or catching several parameters without listing all of them <br/>
**Exceptions** have try and catch like normal, but they also have a "finally" block that executes whether or not an exception was thrown <br/>
### Destructuring
const a = [1, 2, 4, 5]; <br/>
// destructure the first two items from a, into the new variables b and c <br/>
const [b, c] = a; //not creating an array, just desturcuting values out <br/>
to implement with objects, use the names of the properties that you want, not just their positions <br/>
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] }; <br/>
const { a, c } = o; <br/>
console.log(a, c); <br/>
// OUTPUT 1, ['fish', 'cats'] <br/>
### This
In the global scope, this refers to the globalThis, or the runtime environment (ex: the browser) <br/>
Inside a function, this referes to the object that own the function (which could be globalThis) <br/>
Inside an object this refers to the object <br/>
A closure will keep track of the this variable that it originally referred to
### Promises
The setTimeout function sets a timer which executes a function or specified piece of code once the timer expires <br/>
setTimeout(code, time, properties...) <br/>
Promises are an object running in the webpage API (a seperate stack for execution) with a function and a state <br/>
Possible states: pending, fulfilled, rejected <br/>
The promise takes a function as a parameter, which function takes two function parameters: reject and resolve (which are always the same) <br/>
The promise also has methods *then, catch, and finally*, which run if the promise is resolved, rejected, or regardless of the outcome, respectively
### Async, Await 
Marking a function as async means that it will return a promise </br>
Calling an async function will return a promise, immediately in its resolved state </br>
Calling a function that returns a Promise with return the promise in its pending state until is resolved, then will return the promise in its resolved state </br>
Calling an async function with await will wait until the Promise is resolved, then return the return value of the Promise (not the Promise itself) </br>
Using await to call an async function will cause that thread to hold until the promise in the async function resolves <br/>

## Web services
### DNS
When you buy your domain name you also have to buy the IP address <br/>
when someone navigates to your domain name, first it goes through the DNS which is a service to link domain names to IP addresses
### internet layers
link - physical connections <br/>
internet - IP - chucks up data and establishes connections to send the data across <br/>
Transport - TCP/UDP - TCP makes sure everything comes through in order (more expensive) - UDP doesn't check everything (run faster) <br/>
Application - provides functionality like web browsing
### web server
the server is the hardware computer <br/>
Most applications referece other servers (or services) <br/>
the service redirects calls through port 443 to other parts of the application <br/>
Caddy is the service that will group all of the services (gateway, hosting)

### Fetch
Returns a promise <br/>
makes HTTP requests <br/>
an example:
```
fetch('https://api.quotable.io/random')
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```

### Node.js

Uses the V8 JS interpreter that chrome open-sourced and runs their browser and wrapped it in the console <br/>
comes with npm, uses nvm (installed spereately) <br/>
Allows the back-end of the stack to run JS, so now the whole stack runs in one language <br/>
use npm init -y to turn your project into and npm project. <br/>
It will automatically create a .json file <br/>
<br/>
Using npm install on a specific package will create two new files: <br/>
*node_modules* which includes all of the source code that the package you install depends on (can be a lot, sdaly) <br/>
*package-lock.json* which manages the versions of things... <br/>
<br/>

### Express
express -	constructor and default middleware <br/>
app	-	express application <br/>
req	-	request object from the client (HTTP headers)
res	-		response object from the application (body)    <br/>
router	-	adding child routing<br/>
<br/>
Example
```
const express = require('express');
const app = express();

app.get('*', (req, res) => {
  res.send('<h1>Hello Express!</h1>');
});

app.listen(3000);
```

Some HTTP headers: <br/>
Cookie, content-type, host <br/>

### Middleware
Each express app.function() is a piece of middleware for handling different HTTP requests <br/>
next() will call the next valid funciton in the express code <br/>
Eventually there must be a response in the next change <br/>
oRdEr MaTtErS <br/>
```
app.method(/path, ()=>{}) <br/>
```

### Endpoint design
Gramatical - Noun/resouce based <br/>
Readable - human-understandable <br/>
Simple - Single responsibility principle <br/>
Documented - open API <br/>

### Frontend Backend
Frontend - Chrome   <br/>
Backend - Node.js   <br/>
talk to each other with HTTPS (if initiated by the client)   <br/>
This is what express is for? <br/>
Backend serves frontend files <br/>

### Daemons
if you shell into the server in virginia and then log out, everything will stop <br/>
So the daemon is the program that runs the server (program?) while you aren't there <br/>
CAN fork other processes <br/>

## Databases
Mongo takes objects and puts them in arrays so they are searchable <br/>

## Authentication

### Passwords
store info in the database <br/>
protect the password in the database <br/>
hash algorithms put the hash values in the database, so that you don't know the original password <br/>

### Cookies
Leave crumbs on your browser to save info for the next session <br/>
Dangerous when other websites access the info <br/>
Your browser saves the cookies id <br/>
The database validates the cookie and gives permissions/info <br/>

## Websockets
like http but goes both ways <br/>
start with http but upgrade to websocket <br/>
peer to peer = the server and client are peers (not browser to browser) <br/>

### Details


## React
Components are made of html and js <br/>
Component names have to be uppercase <br/>
When using ReactDOM.render( <html or component>  ,... ), you cannot have more that one component at the top level <br/>

### JSX
Uses Babel to interpret into JS before rendering <br/>
Use { } to escape from HTML into JS <br/>
Use {{ }} to add attributes <div className="component" style={{backgroundcolor:blue}} onMouseMove={changeOutlook} />
<p> Hello {variable} </p>

### Single-Page Applications
Single-page application uses components over and over again on one html page <br/>
Use the react <Routes>

### Toolchain
Runs several scripts in a pipeline to run multiple tools on the code before it can be deployed <br/>
We have introduced complexity in the code to have better tools <br/>
Build and production toolchains are different? <br/>

### Reactivity
Properties to components (passed in) <br/>
State on components (internal variables) <br/>

### Hooks
UseState <br/>
use this like the properties of your component <br/>
const [property, setProperty] = React.useState("value") <br/>
you can't change the property yourself, you have to call the React setProperty function (so that it doesn't re-render the DOM?) <br/>
Hooks can ONLY be in the top level of a component <br/>

### Use State
use state returns two things [state, updateState] <br/>
the state variable it returns is a reference to (or a copy of?) another place where it is storing that variable <br/>
If you want to update it, use the updateState function that it has returned. React needs to know to conditionally rerender the page everywhere you used the variable <br/>
Be careful about logging the state values after they are updated because it will probably display the old values (something to do with promises and react handling the updateState) <br/>
<br/>
Passing down state from parent to child is important <br/>
In order to pass information back up, use a callback function <br/>

### Use Effect
does something whenever a certain state changes <br/>
The first function gets called whenever the component rerenders <br/>
The renrendering happens whenver the state changes <br/>
Before rendering, it checks to make sure that any awaits that it depends on have finished <br/>
<br/>
The return function happens at the end of the lifetime of the component <br/>
aka when the component rerenders, _before_ it renders again, it will call the return (cleanup) function <br/>
```
  React.useEffect(() => {
    console.log('rendered');

    return function cleanup() {
      console.log('cleanup');
    };
  });
```
You can also provide a parameter which is an array of states that we want the effect to react to <br/>
The useEffect will always happen the first time the component loads, no matter the states in the array, so an empty array as a parameter will only call the effect the frist time the component loads <br/>
```
  React.useEffect(() => {
    console.log(`count1 effect triggered ${count1}`);
  }, [count1]);
```
## Useful Things
### Typescript
It is useful <br/>
Interfaces, Unions, might be worth it <br/>

### Performance Monitoring

Lighthouse, Network, throttling, minify and compress, etc <br/>
