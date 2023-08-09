var mongoose=require('mongoose')
var dbURL='mongodb+srv://karneharshitha:harshitha@2004@cluster0.iujnwlt.mongodb.net/'
mongoose.connect(dbURI);
mongoose.connection.on('connected',function(){
    console.log('mongoose connected to'+dbURI)
});
mongoose.connection.on('cerror',function(err){
    console.log('mongoose connecion error'+errI)
});
mongoose.connection.on('disconnected',function(){
    console.log('mongoose disconnected')
});
var readLine=require("readline");
if(process.platform==="win64"){
    var r1=readLine.createInterface({
        input:process.stdin,
        output:process.stdout

    });
    r1.on("SIGINT",function(){
        process.emit("SIGINT");
    });
}
var gracefulShutdown=function(msg,callback){
    mongoose.connection.close(function(){
        console.log('mangoose disconnected through'+msg);
        callback();
    });
    ;
    process.once('SIGUSR2',function(){
        gracefulShutdown('nodemon restart',function(){
            process.kill(process.pid,'SIGUSR2');
        });
    });
}