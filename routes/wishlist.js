const express = require("express");
const router = express.Router();
const User = require("../models/user");

const updateWishlist = (wishlistItem, res, userID) => {
  User.findByIdAndUpdate(userID, { $push: { wishlist: wishlistItem } })
    .then(note => {
      console.log(note);
      return res.json();
    })
    .catch(() => {
      res.status(400).json({ msg: "Error: Could not add to wishlist" });
    });
};
router.get("/wishlist", (req, res) => {
  User.findById(req.user.id)
    .then(user => {
      res.json(user.wishlist);
    })
    .catch(err => res.json({ msg: "Could not add to wishlist" }));
});
router.post("/wishlist", (req, res) => {
  console.log(req.user);
  updateWishlist(req.body, res, req.user.id);
});

module.exports = router;