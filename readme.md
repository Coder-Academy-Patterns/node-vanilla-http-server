1. Add json response
1. Add html response
1. Add 404 status
1. POST? Bio message variable
  - GET /bio
  - PUT /bio
  - Served by /about
1. Add image response?


## Challenges

1. Add `/postcode/3021` json response
2. Add `sendHTML(response, mainHTML)` function to **utils.js**
    sendHTML(response, `
    <h1>About</h1>
    <p>This is a paragraph</p>
    `)
3. Change the *not found* route to send back JSON instead of plain text, while still keeping the 404 status code — e.g. `{ "error": "Page not found" }`
4. Add `/assets/main.css` route with some simple CSS
5. Change `sendHTML()` to add a `<link>` to the **main.css** URL
6. (Advanced) Add an *assets* directory with an gif file inside. Serve that file at `/assets/example.gif` with the correct content type.
7. (Advanced) Add a catch-all `/postcode/(number)` route, which reads a matching file in a *postcodes* directory. e.g. `/postcode/3040` will read the file at `/postcodes/3040.json` in the project directory, and send it back.