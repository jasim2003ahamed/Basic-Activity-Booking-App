const { validationResult } = require("express-validator");
const Activity = require("../models/Activity");
const Booking = require("../models/Booking");

exports.listActivities = async (req, res) => {
  try {
    const activities = await Activity.find().sort({ datetime: 1 });
    res.json(activities);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.bookActivity = async (req, res) => {
  const { activityId } = req.body;

  try {
    const activity = await Activity.findById(activityId);
    if (!activity)
      return res.status(404).json({ msg: "Activity not found" });

    const booking = new Booking({
      user: req.user.id,
      activity: activityId
    });

    await booking.save();
    res.status(201).json({ msg: "Activity booked successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate("activity");
    res.json(bookings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
