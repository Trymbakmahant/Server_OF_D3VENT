const router = require("express").Router();

const EventDiscription = require("../models/Eventdiscription");
router.route("/").post(async (req, res) => {
  try {
    const { eventName } = req.body;

    const Check = await EventDiscription.find({
      eventName: { $eq: eventName },
    });
    const a = Check[Check.length-1];
    const current = new Date();
    const aaa = (a.timeToEnd - current) / 1000;
    if (aaa > 0) {
      res.json(a.imageUrl);
    } else {
      res.json("udaa de");
    }
  } catch (err) {
    console.log(err);
    res.json("mission failed");
  }
});

module.exports = router;
