1. Add json response
1. Add html response
1. Add 404 status
1. Add image response?
1. POST?


## Challenges

1. Add `/postcode/3021` json response
2. Add `sendHTML(response, mainHTML)` function to **utils.js**
    sendHTML(response, `
    <h1>About</h1>
    <p>This is a paragraph</p>
    `)
3. Change the *not found* route to send back JSON instead of plain text, while still keeping the 404 status code
4. Add `/assets/main.css` route with some simple CSS
5. Change `sendHTML()` to add a `<link>` to the **main.css** URL
6. 