let express = require('express');
let session = require('express-session');
let app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(3000, () => console.log('Server started'));
let parser = require('body-parser').urlencode({extended: false});

app.use(session({
  secret: 'keyboard hvfdgh7657688cat',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 10000}
}));

app.get('/giaodich', (req, res) => res.send('Giao dich'))

app.get('/dangnhap', (req, res) => {
  res.render('dangnhap');
})

app.post('/xulydangnhap', parser, (req, res) => {
  res.send('xin chao')
})
