const AdminModel = require('../Model/adminModel');
const bcrypt = require("bcryptjs");
const LocalStrategy = require('passport-local');
const RegisterAdmin=(adminData)=>{
    return new Promise((resolve,reject)=>{
        AdminModel.findOne({email:adminData.email},(err,user)=>{
             if (user) {
                resolve({ status: 409, message: 'User with specified email already exists' });
            } else if (!user) {
                let usermodel = new AdminModel();
                usermodel.firstname = adminData.firstname;
                usermodel.lastname = adminData.lastname;
                usermodel.city = adminData.city;
                usermodel.phone = adminData.phone;
                usermodel.email = adminData.email;
                usermodel.password = bcrypt.hashSync(adminData.password, 10);
                 usermodel.save((err) => {
                    if (!err) {
                        resolve({ status: 200, message: 'Admin registered successfully' });
                    } else {
                        throw err;
                    }
                });
            } else {
                reject(err);
            }
    
    });
    });
}
const LoginAdmin=()=>{
    return new LocalStrategy({usernameField:'email',passwordField:'password'},function(username,password,done){
        AdminModel.findOne({email:username},(err,user)=>{
            if(err){
                return done(err);
            }
            if(!user){
                return done(null,false,{message:'Incorrect Email'});
            }
            if(!bcrypt.compareSync(password,user.password)){
                return done(null,false,{message:'Incorrect Password'});
            }
            return done(null,user);
        });
    });
};
module.exports = {RegisterAdmin,LoginAdmin};