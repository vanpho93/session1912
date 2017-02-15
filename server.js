let express = require('express');
let session = require('express-session');
let app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(3000, () => console.log('Server started'));
let parser = require('body-parser').urlencoded({extended: false});

app.use(session({
  secret: 'keyboard hvfdgh7657688cat',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 10000}
}));

let middleGiaoDich = (req, res, next) => {
  if(req.session.daDangNhap) return next();
  res.redirect('/dangnhap')
}

app.get('/giaodich', middleGiaoDich, (req, res) => {
  res.send('Moi ban giao dich');
});

let middleDangNhap = (req, res, next) => {
  if(!req.session.daDangNhap) return next();
  res.redirect('/giaodich');
}

app.get('/dangnhap', middleDangNhap, (req, res) => {
  res.render('dangnhap');
})

app.post('/xulydangnhap', parser, (req, res) => {
  let {username, password} = req.body;
  if(username != 'khoapham' || password != '123'){
    return res.send('Kiem tra lai thong tin user')
  }
  req.session.daDangNhap = true;
  res.send('xin chao')
})
