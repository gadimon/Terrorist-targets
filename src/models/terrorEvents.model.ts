import mongoose, { model, Schema } from "mongoose";
import { ITerrorEvent } from "../../interfaces/ITerrorEvent";

const terrorEventSchema: Schema = new Schema<ITerrorEvent>({
  _id: Schema.Types.ObjectId,
  eventid: { type: Number, required: true },
  iyear: { type: Number, required: true },
  imonth: { type: Number, required: true },
  iday: { type: Number, required: true },
  country_txt: { type: String, required: true },
  region_txt: { type: String, required: true },
  city: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  attacktype1_txt: { type: String, required: true },
  targtype1_txt: { type: String, required: true },
  target1: { type: String, required: true },
  gname: { type: String, required: true },
  weaptype1_txt: { type: String, required: true },
  nkill: { type: Number },
  nwound: { type: Number },
  nperps: { type: Number },
  summary: { type: String },
});

const TerrorEvents = model<ITerrorEvent>("TerrorEvents", terrorEventSchema);

export { TerrorEvents };
