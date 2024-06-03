const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    nom:{type:String, required:true},
    cin:{type:String, required:true},
    tel:{type:String, required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,
        ref:'User',required:true
    },
});

const clients = new mongoose.model("clients",clientSchema);
module.exports = clients;