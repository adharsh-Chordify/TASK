const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task7').then(console.log("The database is connected")).catch((err)=>{ console.log('The error is ',err); })