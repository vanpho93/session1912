let express = require('express');
let session = require('express-session');
let app = express();
app.listen(3000, () => console.log('Server started'));

app.use(session({
  secret: 'keyboard hvfdgh7657688cat',
  resave: false,
  saveUninitialized: true
}))

app.get('/', (req, res) => res.send('Hello'))

app.get('/muave', (req, res) => {
  req.session.daMuaVe = true;
  res.send('Ban da mua ve')
});

app.get('/vaorap', (req, res) => {
  if(req.session.daMuaVe){
    return res.send('Welcome')
  }
  res.send('Ban phai mua ve truoc **********')
});
