let express = require('express');
let session = require('express-session');
let app = express();
app.listen(3000, () => console.log('Server started'));

app.use(session({
  secret: 'keyboard hvfdgh7657688cat',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 10000}
}));

app.use((req, res, next) => {
  req.name = 'KhoaPham';
  next();
})

app.get('/', (req, res) => res.send('Hello ' + req.name))

app.get('/muave', (req, res) => {
  req.session.daMuaVe = true;
  res.send('Ban da mua ve')
});

app.get('/vaorap', (req, res) => {
  if(req.session.daMuaVe){
    req.session.count = req.session.count ? ++req.session.count : 1;
    return res.send('Welcome')
  }
  res.send('Ban phai mua ve truoc **********')
});
