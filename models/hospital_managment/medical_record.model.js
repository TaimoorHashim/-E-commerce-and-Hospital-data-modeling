import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    allergies: [{ type: String }],
    chronicDiseases: [{ type: String }],
    medications: [{ type: String }],

    // Visit history
    visits: [
      {
        date: { type: Date, default: Date.now },
        doctor: { type: String, trim: true },
        diagnosis: { type: String, trim: true },
        prescription: { type: String, trim: true },
        notes: { type: String, trim: true },
      },
    ],

    // Emergency contact
    emergencyContact: {
      name: { type: String, trim: true },
      relation: { type: String, trim: true },
      phone: { type: String, trim: true },
    },
  },
  { timestamps: true }
);

export const medicalRecord = mongoose.model(
  "medicalRecord",
  medicalRecordSchema
);
