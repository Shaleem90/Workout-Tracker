const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Exercise Type?"
      },
      name: {
        type: String,
        trim: true,
        required: "Exercise Names?"
      },
      duration: {
        type: Number,
        required: "Enter time Duration"
      },
      distance: {
        type: Number,
        required: [false, "Enter Distance"]
      },
      weight: {
        type: Number,
        required: [false, "Enter Weight"]
      },
      reps: {
        type: Number,
        required: [false, "Enter number of Repetitions"]
      },
      sets: {
        type: Number,
        required: [false, "Enter number of Sets"]
      }
    }
  ]
},
  {
    toJSON: {
      virtuals: true
    }
  }
);

 const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;