const HTTP = require('http')
const { sendJSON, readBodyAsJSON } = require('./utils')

let bio = 'An adventurer and wily intellectual, Mark Twain wrote classic American novels'

const server = HTTP.createServer((request, response) => {
  const path = request.url
  console.log('Request received', path)

  if (path === '/bio') {
    if (request.method === 'PUT') {
      readBodyAsJSON(request, (error, json) => {
        if (error) {
          sendJSON(response, {
            error: error.message
          })
          return
        }

        const newBio = json.text
        bio = newBio
        sendJSON(response, {
          message: 'Bio changed'
        })
      })
      // Change the bio
    }
    else {
      sendJSON(response, {
        text: bio
      })
    }
  }
  else if (path === '/') {
    response.end('Home')
  }
  else if (path === '/opensesame') {
    response.end('Oooh you found the secret')
  }
  else if (path === '/about') {
//     sendHTML(response, `
// <h1>About</h1>
// <p>This is a paragraph</p>
// `)

    response.writeHead(200, {
      'Content-Type': 'text/html'
    })
    response.end(`
<!doctype html>
<html>
  <head>
    <link rel='stylesheet' href='/assets/main.css'>
    <link rel='stylesheet' href='/assets/color/blue'>
  </head>
  <body>
    <h1>About</h1>
    <p>${ bio }</p>
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
  else if (path === '/assets/main.css') {
    response.writeHead(200, {
      'Content-Type': 'text/css'
    })
    response.end(`
body {
  font-family: sans-serif;
}
`)
  }
  //else if (/^\/assets\/color\//.test(path)) {
  // e.g. /assets/color/red
  else if (path.indexOf('/assets/color/') === 0) {
    // Get the color part, so ignore the leading '/assets/color/'
    const color = path.slice(14)
    response.writeHead(200, {
      'Content-Type': 'text/css'
    })
    response.end(`
body {
  color: ${color};
}
`)
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