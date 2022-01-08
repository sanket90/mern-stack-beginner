const mongoose = require("mongoose");

const HotelImagesSchema = mongoose.Schema({
    public_id: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

const HotelRoomSchema = mongoose.Schema({
    typeOfroom: {
        type: String,
        required: [true, "Please enter type of room (Regular/Premium/Deluxe)."]
    },
    price: {
        type: Number,
        required: [true, "Please enter price of room."],
        maxLength: [7, "Price cannot exceed 10 lakh rupees"]
    },
    images: [
        HotelImagesSchema
    ],
    available: {
        type: Number,
        required: [true, "Please enter total number of such rooms available."],
        default: 0
    },

});

const HotelAmenitiesSchema = mongoose.Schema({
    facility: {
        type: String,
        required: [true, "Please enter the amenities offered by the hotel (wifi connectivity/swimming pool/etc)."]
    }
});

const HotelReviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true
    }
});

const HotelSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter hotel name."]
    },
    state: {
        type: String,
        required: [true, "Please enter the state in which the hotel is located."]
    },
    address: {
        type: String,
        required: [true, "Please enter hotel address."]
    },
    rooms: [
        HotelRoomSchema
    ],
    amenities: [
        HotelAmenitiesSchema
    ],
    numOfreviews: {
        type: Number,
        default: 0
    },
    reviews: [
        HotelReviewSchema
    ],
})

module.exports = mongoose.model("Hotels", HotelSchema);