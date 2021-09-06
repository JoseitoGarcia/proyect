const express= require('express');
const path = require('path');
const exphbs= require('express-Handlebars');
const methodOverride= require('method-override');
const expressSesion= require('express-session');
//initializations
const app= express();
require('./database');
//settings      
app.set('port', 3000);
app.set('views',__dirname + '/views');
app.engine('hbs',exphbs({
    defaultlayout:'main',
    layoutsdir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname:'hbs'
}));
app.set('view engine', 'hbs');
//middlewares
app.use(express.urlencoded({extended: false }));
app.use(methodOverride('_method'));
app.use(expressSesion({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));

//global variables

//rutes
app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/notes'));
//statics Files
app.use(express.static(__dirname + 'public'));

//server is listenning
app.listen(app.get('port'), ()=> {
console.log('Server on port ', app.get('port'));
});
