const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter hotel name."]
    },
    state:{
        type:String,
        required:[true,"Please enter the state in which the hotel is located."]
    },
    address:{
        type:String,
        required:[true,"Please enter hotel address."]    
    },
    rooms:[
        {
            typeOfroom:{
                type:String,
                required:[true,"Please enter type of room (Regular/Premium/Deluxe)."]
            },
            price:{
                type:Number,
                required:[true,"Please enter price of room."],
                maxLength:[7,"Price cannot exceed 10 lakh rupees"]
            },
            images:[
                {
                    public_id:{
                        type:String,
                        required:true
                    },
                    url:{
                        type:String,
                        required:true
                    }
                }
            ],
            available:{
                type:Number,
                required:[true,"Please enter total number of such rooms available."],
                default:0
            },
        
        }
    ],
    amenities:[
        {
            facility:{
            type:String,
            required:[true,"Please enter the amenities offered by the hotel (wifi connectivity/swimming pool/etc)."]
                }
        }

    ],
    numOfreviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
})

module.exports = mongoose.model("Hotels",hotelSchema);