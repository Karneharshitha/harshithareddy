var mongoose=require('mongoose')
var dbURI='mongodb://0.0.0.0:27017/loc8r';
mongoose.connect(dbURI);
mongoose.connection.on('connected',()=>{
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error',err=>{
    console.log('Mongoose connecion error:',err)
});
mongoose.connection.on('disconnected',()=>{
    console.log('Mongoose disconnected');
});
require('./locations');