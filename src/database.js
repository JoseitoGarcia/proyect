const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/notes-db-app',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(console.log('MongoDB up and running'))
.catch(err=>console.error(err));
