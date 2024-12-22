import { ITerrorEvent } from "../../interfaces/ITerrorEvent";
import { TerrorEvents } from "../models/terrorEvents.model";

export const AttacksByCasualties = async (): Promise<ITerrorEvent[] | null> => {
  try {
    return await TerrorEvents.aggregate([
      {
        $group: {
          _id: "$attacktype1_txt",
          totalKills: { $sum: { $sum: ["$nkill", "$nwound"] } },
        },
      },
      {
        $sort: { totalKills: 1 },
      },
    ]);
  } catch (error) {
    throw new Error("Error fetching TerrorEvents");
  }
};
