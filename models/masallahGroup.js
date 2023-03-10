import { SEAT_LOCATIONS } from "appConstants";
import { Schema } from "mongoose";

export const masallahGroupSchema = new Schema(
  {
    name: { type: String, default: "" },
    group_number: { type: Number },
    location: {
      type: String,
      enum: Object.values(SEAT_LOCATIONS)
    },
    color: { type: String, default: "#ffffff" },
    is_blocked: { type: Boolean, default: false },
    total_count: { type: Number, default: 0 },
    alloted_count: { type: Number, default: 0 }
  },
  { timestamps: true }
);
