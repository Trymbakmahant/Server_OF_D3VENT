const router = require("express").Router();

const EventDiscription = require("../models/Eventdiscription");
router.route("/").post(async (req, res) => {
  try {
    const { indexId, eventName, AddvertiseLink, AddvertiseName, time } =
      req.body;
      let imageId = AddvertiseLink.split('/')[5];
      let imageUrl = `https://drive.google.com/uc?export=view&id=${imageId}`;
    function addSeconds(numOfSeconds, date) {
      date.setSeconds(date.getSeconds() + numOfSeconds + 10);

      return date;
    }

    const date = new Date();
    const timeToEnd = addSeconds(time, date);
    const eventDiscription = new EventDiscription({
      indexId,
      eventName,
      imageUrl,
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
