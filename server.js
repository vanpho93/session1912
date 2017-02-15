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

app.get('/giaodich', (req, res) => {
  if(req.session.daDangNhap){
    return res.send('Moi ban giao dich')
  }
  res.send('Ban phai dang nhap');
});

app.get('/dangnhap', (req, res) => {
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
