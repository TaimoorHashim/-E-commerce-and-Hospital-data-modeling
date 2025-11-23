import mongoose from "mongoose";
import { Hospital } from "./hospital.model";

const workingInHospital = new mongoose.Schema({
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
    required: true,
  },
  workingHours: {
    type: Number,
    required: true,
  },
});

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    Salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYear: {
      type: Number,
      default: 0,
    },
    worksInHospitals: {
      type: [workingInHospital],
    },
  },
  { timestamps: true }
);
export const Doctor = mongoose.model("Doctor", doctorSchema);
