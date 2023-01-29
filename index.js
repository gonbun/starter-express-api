const express = require('express')
const session = require("express-session");
const { CyclicSessionStore } = require("@cyclic.sh/session-store");

const app = express()
const options = {
    table: {
      name: process.env.CYCLIC_DB,
    }
  };


app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)