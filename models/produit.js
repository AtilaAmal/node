const mongoose = require("mongoose");

const produitSchema = new mongoose.Schema({
    libelle:{type:String, required:true},
    prix:{type:Number, required:true},
    desc:{type:String, required:true}
})

const produits = new mongoose.model("produits",produitSchema);
module.exports = produits;