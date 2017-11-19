var express = require("express");
var router = express.Router();
var Campground = require("../models/campgrounds");
var middleware = require("../middleware");
var geocoder = require('geocoder');

//INDEX - display lists of campgrounds
router.get("/", function(req,res){
    //Get all campgrounds from DB
    Campground.find({},function(err,allCampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("campgrounds/index",{campgrounds:allCampgrounds});
        }
    });
});

//CREATE - add a new campground to DB                                      
router.post("/", middleware.isLoggedIn, function(req,res){
    //get data from form and add to campground array
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    geocoder.geocode(req.body.location, function(err,data){
        if (err || data.status === 'ZERO_RESULTS') {
          req.flash('error', 'Invalid address');
          return res.redirect('back');
        }
        var lat = data.results[0].geometry.location.lat;
        var lng = data.results[0].geometry.location.lng;
        var location = data.results[0].formatted_address;
        var newCampground = {name: name, image: image, description: desc, price: price, author:author, location: location, lat: lat, lng: lng};
        // Create a new campground and save to DB
        Campground.create(newCampground,function(err,newlyCreated){
            if(err){
                console.log(err);
            }else{ 
                //redirect back to campgrounds page
                res.redirect("/campgrounds");
            }
        });
    });
});

//NEW - show form to create a new campground
router.get("/new", middleware.isLoggedIn, function(req,res){
    res.render("campgrounds/new");
});

//SHOW - show info about one campground
router.get("/:id", function(req,res){
    //find the campground with the speficic id
    Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
        if(err){
            console.log(err);
        }else{
            //render show template with that campground
            res.render("campgrounds/show",{campground:foundCampground});
        }
    });
});

//EDIT - edit campground post
router.get("/:id/edit", middleware.checkCampOwnership, function(req,res){
    Campground.findById(req.params.id,function(err,foundCampground){
        if(err){
            res.redirect("back");
        }else{
            res.render("campgrounds/edit",{campground:foundCampground});  
        }
        
    });
});

//UPDATE - update some campground post
router.put("/:id", middleware.checkCampOwnership, function(req,res){
    geocoder.geocode(req.body.location, function (err, data){
        if (err || data.status === 'ZERO_RESULTS') {
          req.flash('error', 'Invalid address');
          return res.redirect('back');
        }
        var lat = data.results[0].geometry.location.lat;
        var lng = data.results[0].geometry.location.lng;
        var location = data.results[0].formatted_address;
        var newData = {name: req.body.name, image: req.body.image, description: req.body.description, price: req.body.price, location: location, lat: lat, lng: lng};
        //find and update the correct campground
        Campground.findByIdAndUpdate(req.params.id, {$set: newData}, function(err,updatedCampground){
            if(err){
                req.flash("error", err.message);
                res.redirect("back");
            }else{
                req.flash("success","Successfully Updated!");
                res.redirect("/campgrounds/" + updatedCampground._id);
            }
        });
    });
});


//DELETE - delete a particular campground post
router.delete("/:id", middleware.checkCampOwnership, function(req,res){
    Campground.findByIdAndRemove(req.params.id,function(err){
        if(err){
            res.redirect("/campgrounds");
        }else{
            res.redirect("/campgrounds");
        }
    });
});


module.exports = router;