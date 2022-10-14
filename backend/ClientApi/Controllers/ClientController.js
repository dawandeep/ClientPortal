const repo = require('../Repository/ClientRepository');
const RegisterClient=(req,res)=>{
    repo.RegisterClient(req.body)
    .then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.status(404).send(err);
    });
};

const GetClients=(req,res)=>{
    repo.GetClients()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(404).send(err);
    })
}
module.exports = {RegisterClient,GetClients};