const mongoose = require('mongoose');

const connectDatabase =() =>{
  
    mongoose.connect(
        `mongodb+srv://root:root@cluster0.fvbdl.mongodb.net/ecommerce?retryWrites=true&w=majority`, 
        {
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        }
    ).then(()=>{
        console.log('database connected')
    });
}

module.exports = connectDatabase;