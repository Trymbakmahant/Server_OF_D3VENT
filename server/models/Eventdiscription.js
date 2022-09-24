const mongoose = require("mongoose");

const eventDiscription = new mongoose.Schema({
  indexId: { type: String, required: true },
  eventName: { type: String, required: true },
  imageUrl: { type: String, required: true },
  AddvertiseName: { type: String, required: true },
  timeToEnd: {type: Number, required: true}
});

const EventDiscription = mongoose.model("EventDiscription", eventDiscription);
module.exports = EventDiscription;
