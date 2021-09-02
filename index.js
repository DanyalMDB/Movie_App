const path = require('path')
const express = require('express')

const app = express()

//static assets
app.use(express.static('public'))


//route
app.get('/', (request, response)=>{
    console.log(path.resolve( __dirname,'index.html'))
    response.sendFile(path.resolve( __dirname,'index.html'))
})

app.get('/about', (request, response)=>{
    response.sendFile(path.resolve( __dirname,'about.html'))
})

app.get('/contact', (request, response)=>{
    response.sendFile(path.resolve( __dirname,'contact.html'))
})
//Listening Port
app.listen(4200, ()=>{
    console.log('App listening on port 4200')
})



// const http = require('http')  // - Import Required Module


// const fs = require('fs')

// // Synchronous read

// const aboutPage = fs.readFile('about.html')

// const contactPage = fs.readFile('contact.html')

// const homePage = fs.readFile('index.html')



// const server = http.createServer((request, response)=>{   //- Create Server

//     console.log(request.url)


//     if(request.url === '/about'){
//         return response.end(aboutPage)
//     }else if(request.url === '/contact'){
//         return response.end(contactPage)
//     }else if(request.url === '/'){
//         return response.end(homePage)
//     }else{
    
//         response.writeHead(404)
    
//         response.end("Page was not found!")
//     }

// })


// server.listen(4200)
