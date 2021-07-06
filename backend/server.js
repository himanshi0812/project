const app = require('./app');
const connectDatabase = require('./config/database');
// const dotenv = require('dotenv');



// dotenv.config({path : 'backend/config/config.env'})

// connect database
connectDatabase();
app.listen(4000,()=>{
    console.log("server run");
})