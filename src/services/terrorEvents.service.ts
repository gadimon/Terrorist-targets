import { ITerrorEvent } from "../../interfaces/ITerrorEvent";
import { TerrorEvents } from "../models/terrorEvents.model";

export const AttacksByCasualties = async (): Promise<ITerrorEvent[] | null> => {
  try {
    return await TerrorEvents.aggregate([
      {
        $group: {
          _id: "$attacktype1_txt",
          totalCasualties: { $sum: { $sum: ["$nkill", "$nwound"] } },
        },
      },
      {
        $sort: { totalCasualties: 1 },
      },
    ]);
  } catch (error) {
    throw new Error("Error fetching TerrorEvents");
  }
};

export const RegionsByCasualties = async (): Promise<ITerrorEvent[] | null> => {
  try {
    return await TerrorEvents.aggregate([
      {
        $group: {
          _id: {
            region: "$region_txt",
            city: "$city",
            lat: "$latitude",
            long: "$longitude",
          },
          total: { $sum: 1 },
        },
      },
      {
        $group: {
          _id: { region: "$_id.region", lat: "$_id.lat", long: "$_id.long" },
          total: { $sum: "$total" },
          totalKills: { $sum: { $sum: ["$nkill", "$nwound"] } },
        },
      },
      {
        $project: {
          _id: 0,
          region: "$_id.region",
          count: { $avg: ["$total", "$totalKills"] },
          lat: "$_id.lat",
          long: "$_id.long",
        },
      },
      {
        $sort: { count: 1 },
      },
    ]);
  } catch (error) {
    throw new Error("Error fetching TerrorEvents");
  }
};
