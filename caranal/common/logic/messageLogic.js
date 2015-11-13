 module.exports = function createMessage(app,msg) { 
    //var mongodb = app.dataSources.localMongoDB;
    var chat = app.models.TChat;
    chat.upsert({message: msg});
}
//data sources;
 
