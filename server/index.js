const express = require('express')
const app = express()
const port = 3000

// define our server routes
app.get('/test', (req, res)=>{
    //Return the message "Server is operational" if a client makes a get request to the route /test
    res.send('Server is operational');
})