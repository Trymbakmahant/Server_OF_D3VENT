const router = require("express").Router();

const EventDiscription = require("../models/Eventdiscription");
router.route("/").post(async (req, res) => {
  try {
    const { indexId, eventName, AddvertiseLink, AddvertiseName, time } =
      req.body;
    function addSeconds(numOfSeconds, date) {
      date.setSeconds(date.getSeconds() + numOfSeconds + 10);

      return date;
    }

    const date = new Date();
    const timeToEnd = addSeconds(time, date);
    const eventDiscription = new EventDiscription({
      indexId,
      eventName,
      AddvertiseLink,
      AddvertiseName,
      timeToEnd,
    });

    await eventDiscription.save();

    res.send({ message: "sucsses" });
  } catch (err) {
    console.log(err);
    res.json("mission failed");
  }
});

module.exports = router;
