const HTTP = require('http')

const server = HTTP.createServer((request, response) => {
  const path = request.url
  console.log('Request received', path)
  if (path === '/') {
    response.end('Home')
  }
  else if (path === '/opensesame') {
    response.end('Oooh you found the secret')
  }
  else if (path === '/about.html') {
    response.end('<!doctype html><html><body><h1>About</h1></body></html>')
  }
  else if (path === '/postcode.json') {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    })
    response.end(`{ "name": "Melbourne", "postcode": 3000 }`)
  }
  else {
    response.end('Back at you')
  }
})

// Start the server
server.listen(7000, (error) => {
  console.log('Server has started at http://localhost:7000')
})