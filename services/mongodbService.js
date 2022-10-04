const mongoose = require("mongoose");
const { config } = require("../configs/config");

mongoose.Promise = global.Promise;

const dbUser = encodeURIComponent(config.dbUser);
const dbPass = encodeURIComponent(config.dbPass);
const dbCluster = config.dbCluster;

const uri = `mongodb+srv://${dbUser}:${dbPass}@${dbCluster}/?retryWrites=true&w=majority`;

async function connection(dbName){
        try{
                await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: dbName});
                console.log("Database Connected!");
        }catch(err){
                console.log("Error al intentar conectarse a la base de datos");
        }
}

module.exports = { connection };