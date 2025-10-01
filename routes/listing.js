const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const { isLoggedIn, validateListing, isOwner } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer")
const {storage} = require("../cloudConfig.js")
const upload = multer({storage})  //uploads folder can be of any name -- {dest:"uploads/"}

router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,
  upload.single("listing[image]") ,
  validateListing,
  wrapAsync(listingController.createListing)
);
// .post( upload.single("listing[image]") ,(req,res)=>{
//   res.send(req.file)
// })


//New listing Route  --- new route should be before /:id as it take new as id and search in DB.
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(
  isLoggedIn,
  isOwner,
  upload.single("listing[image]") ,
  validateListing,
  wrapAsync(listingController.updateListing)
)
.delete(
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.destroyListing)
)

//edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);


module.exports = router;






// //index.ejs
// router.get("/", wrapAsync(listingController.index));


// //show.ejs
// router.get("/:id", wrapAsync(listingController.showListing));

// //create Route
// router.post(
//   "/",
//   isLoggedIn,
//   validateListing,
//   wrapAsync(listingController.createListing)
// );



// //update route
// router.put(
//   "/:id",
//   isLoggedIn,
//   isOwner,
//   validateListing,
//   wrapAsync(listingController.updateListing)
// );

// //delete route
// router.delete(
//   "/:id",
//   isLoggedIn,
//   isOwner,
//   wrapAsync(listingController.destroyListing)
// );



// if(!newListing.title){
//     throw new ExpressError(400, "Title is missing!")
// }
// if(!newListing.description){
//     throw new ExpressError(400, "Description is missing!")
// }
// if(!newListing.price){
//     throw new ExpressError(400, "price is missing!")
// }
// if(!newListing.location){
//     throw new ExpressError(400, "location is missing!")
// }
