const router = require("express").Router();

const EventDiscription = require("../models/Eventdiscription");
router.route("/").post(async (req, res) => {
  try {
    const {
      indexId,
      eventName,
      AddvertiseLink,
      AddvertiseName,
      time
    } = req.body;

    let timeToEnd = new Date();
    timeToEnd = Date.parse(timeToEnd) + (time*1000);
    const eventDiscription = new EventDiscription({
      indexId,
      eventName,
      AddvertiseLink,
      AddvertiseName,
      timeToEnd
    });
   
    await eventDiscription.save();
 
    res.send({ message: "sucsses" });
  } catch (err) {
    console.log(err);
    res.json("mission failed");
  }
});

module.exports = router;
