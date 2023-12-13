const {sequelize}=require('./db')
const {DataTypes}=require('sequelize')

const Data = sequelize.define('Data',{
    content:{
       type:DataTypes.STRING,
       
       validate:{max:150}
    },
    description:{
        type:DataTypes.STRING
    },
    isCompleted:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }

})

// sequelize.sync({force:true})

module.exports=Data