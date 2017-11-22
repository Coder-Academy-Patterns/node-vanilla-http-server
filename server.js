const HTTP = require('http')
const { sendJSON } = require('./utils')

const server = HTTP.createServer((request, response) => {
  const path = request.url
  console.log('Request received', path)
  if (path === '/') {
    response.end('Home')
  }
  else if (path === '/opensesame') {
    response.end('Oooh you found the secret')
  }
  else if (path === '/about') {
    sendHTML(response, `
<h1>About</h1>
<p>This is a paragraph</p>
`)

    response.writeHead(200, {
      'Content-Type': 'text/html'
    })
    response.end(`
<!doctype html>
<html>
  <body>
    <h1>About</h1>
    <p>This is a paragraph</p>
  </body>
</html>
    `)
  }
  else if (path === '/postcode.json') {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    })
    response.end(`{ "name": "Melbourne", "postcode": 3000 }`)
  }
  else if (path === '/postcode/3020') {
    sendJSON(response, [
      { name: 'Albion', postcode: 3020 },
      { name: 'Sunshine', postcode: 3020 }
    ])
  }
  else if (path === '/postcode/3022') {
    sendJSON(response, [
      { name: 'Deer Park East', postcode: 3022 },
      { name: 'Ardeer', postcode: 3022 }
    ])
  }
  else {
    response.writeHead(404)
    response.end('Page not found')
  }
})

// Start the server
server.listen(7000, (error) => {
  console.log('Server has started at http://localhost:7000')
})