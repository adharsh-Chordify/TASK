const {Sequelize}=require('sequelize')


const sequelize=new Sequelize(
    "testDB","root","",{
       dialect:'mysql',
       host:"localhost",
       port:3305
    }
)

const connect= async()=>{
    try{
        await sequelize.authenticate()
        console.log("The database is connected");

    }
    catch(err){
        console.log("The error is" ,err);
    }
}


module.exports={sequelize,connect}