const mongoose = require("mongoose");
const connection_string = "mongodb+srv://amal:0000@cluster-store.lvik0bz.mongodb.net/db-store?retryWrites=true&w=majority&appName=Cluster-Store";

mongoose.connect(connection_string, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => console.log("DB CONNECTED...")).catch((error) => console.log(error.message))