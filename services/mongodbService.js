const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const dbUser = process.env.DBUSER;
const dbPass = process.env.DBPASS;
const dbCluster = process.env.DBCLUSTER;
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