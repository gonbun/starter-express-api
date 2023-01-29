const express = require('express')
const session = require("express-session");
const { CyclicSessionStore } = require("@cyclic.sh/session-store");

const app = express()
const options = {
  table: {
    name: process.env.CYCLIC_DB,
  },
  keepExpired: false, 
  touchInterval: 30000, // milliseconds (30 seconds)
  ttl: 86400000 // milliseconds (1 day)
};

app.use(
  session({
    store: new CyclicSessionStore(options),
    })
);


app.all('/', (req, res) => {
  console.log(req.session.count)
  console.log("Just got a request!")
  if(!req.session.count){
    req.session.count=0
  }
  req.session.count +=1
  console.log(req.session.count)
  res.send('Yo!')
})
app.listen(process.env.PORT || 3000)