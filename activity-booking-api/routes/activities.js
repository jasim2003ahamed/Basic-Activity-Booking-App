const express = require("express");
const { body } = require("express-validator");
const router = express.Router();

const activityController = require("../controllers/activityController");
const auth = require("../middleware/auth");


router.get("/", activityController.listActivities);


router.post(
  "/book",
  auth,
  [body("activityId").not().isEmpty().withMessage("Activity ID is required")],
  activityController.bookActivity
);


router.get("/my-bookings", auth, activityController.getMyBookings);

module.exports = router;
