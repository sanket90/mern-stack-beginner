const { setTheUsername } = require("whatwg-url");
const Hotel = require("../models/hotelModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apiFeatures");


//CREATE HOTEL (ADMIN)
exports.createHotel = catchAsyncErrors(async (req,res,next) => {

    const hotel = await Hotel.create(req.body);

    res.status(201).json({
        success:true,
        hotel
    })

});

//GET ALL HOTELS
exports.getAllHotels = catchAsyncErrors(async(req,res)=>{

    const apiFeature = new ApiFeatures(Hotel.find(),req.query).search().filter();
    const hotels = await apiFeature.query;

    res.status(200).json({
        success:true,
        hotels
    })

});

//GET HOTEL DETAILS
exports.getHotelDetails = catchAsyncErrors(async(req,res,next)=>{
    
    const hotel = await Hotel.findById(req.params.id);

    if(!hotel){
        return next(new ErrorHandler("Hotel not found",404));
        
    }

    res.status(200).json({
        success:true,
        hotel
    })

});

//UPDATE HOTEL (ADMIN)

exports.updateHotel = catchAsyncErrors(async (req,res,next)=>{

    let hotel = await Hotel.findById(req.params.id);

    if(!hotel){
        return res.status(500).json({
            success:false,
            message:"Hotel not found on the given parameter."
        })
    }

    hotel = await Hotel.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        hotel
    })
});

//DELETE HOTEL (ADMIN)

exports.deleteHotel = catchAsyncErrors(async(req,res,next)=>{
    const hotel = await Hotel.findById(req.params.id);

    if(!hotel){
        return res.status(500).json({
            success:false,
            message:"Hotel not found."
        })
    }

    await hotel.remove();

    res.status(200).json({
        success:true,
        message:"Hotel has been deleted."
    })
});