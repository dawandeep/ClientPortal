const mongoose = require('mongoose');
const ClientSchema = mongoose.Schema({
    companyName:{
        type: String,
        required: true
    },
    website:{
        type:String,
        required:false
    },
    businessCategory:{
        type:String,
        required:true
    },
    facilityManagement:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mob:{
        type:Number,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
       type:Number,
       required:true
    },
    gstNo:{
        type:Number,
        required:true
    },
    faxNo:{
        type:Number,
        required:false
    }
});
module.exports = mongoose.model('ClientModel',ClientSchema,'Clients');