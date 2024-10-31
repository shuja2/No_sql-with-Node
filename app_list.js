const mongoose = require('mongoose');
const Employee = require('./employee');

const uri =  "mongodb://root:K3iGbXh64EvcqR7iQdAaVr8B@172.21.178.25:27017";

mongoose.connect(uri,{'dbName':'employeeDB'});

Employee.find().then((data)=>{
            console.log(data);
            mongoose.connection.close()
        })