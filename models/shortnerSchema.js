const mongoose = required('mongoose')

const shortnerSchema = new mongoose.Schema({
    urlLong :{type : true,required : true},
    urlShort : {type : true,required : true},
    user : {type : mongoose.Schema.objectId , ref :'myUser'},
    visitHistory : [
        {
            visitTime : {type : Date , default : Date.now()}
        }
    ]

})

module.exports = mongoose.model('shortUrl',shortnerSchema)