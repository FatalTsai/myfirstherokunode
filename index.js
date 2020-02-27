const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const  app  =  express()
var port = 1386
/*
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
*/

  

app.get('/api/fuck', (req, res) => {
  res.json({
      'message': 'fuck'
  });
});

app.listen(port, () => console.log(`backend listening on port ${port}!`))
