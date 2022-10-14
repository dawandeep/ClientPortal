const ClientModel = require('../Model/ClientModel');
const RegisterClient=(userdata)=>{
    return new Promise((resolve,reject)=>{
        ClientModel.findOne({email:userdata.email},(err,client)=>{
            if(client){
                resolve({
                    status:409,
                    message:"Client With specified email already exists"
                });
            }
            else if(!client){
                let clientModel = new ClientModel();
                clientModel.companyName = userdata.companyName;
                clientModel.website = userdata.website;
                clientModel.businessCategory = userdata.businessCategory;
                clientModel.facilityManagement = userdata.facilityManagement;
                clientModel.email = userdata.email;
                clientModel.mob = userdata.mob;
                clientModel.state = userdata.state;
                clientModel.city = userdata.city;
                clientModel.pincode = userdata.pincode;
                clientModel.gstNo = userdata.gstNo;
                clientModel.faxNo = userdata.faxNo;
                clientModel.save((err)=>{
                    if(!err){
                        resolve({
                            status:200,
                            message:"Client is added successfully"
                        })
                    }else{
                        throw err;
                    }
                });
            }else{
                reject(err);
            }
        })
    })
}
const GetClients = ()=>{
    return new Promise((resolve,reject)=>{
        ClientModel.find({},(err,data)=>{
            if(!err){
                resolve(data)
            }
            else{
                reject({status:404,message:err});
            }
        })
    })
}
module.exports = {RegisterClient,GetClients};